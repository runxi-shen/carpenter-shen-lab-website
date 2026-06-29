import { getCollection, type CollectionEntry } from 'astro:content';

// Resolve team photos through Astro's asset pipeline. The .md files store a
// bare filename (e.g. "alan_munoz_resized.jpg"); this glob maps each filename
// to its processed, fingerprinted URL so paths stay correct under `base`.
const photoModules = import.meta.glob<{ default: { src: string } }>(
  '../assets/images/team/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

const photosByFile: Record<string, string> = {};
for (const path in photoModules) {
  const file = path.split('/').pop()!;
  photosByFile[file] = photoModules[path].default.src;
}

export function teamPhoto(filename?: string): string | undefined {
  return filename ? photosByFile[filename] : undefined;
}

// Display labels for the role badge, keyed by the schema's role enum.
export const roleLabels: Record<CollectionEntry<'team'>['data']['role'], string> = {
  'principal-investigator': 'Principal Investigator',
  'co-pi': 'Co-Principal Investigator',
  'senior-consultant': 'Senior Consultant',
  'postdoc': 'Postdoctoral Fellow',
  'phd-student': 'PhD Student',
  'research-scientist': 'Research Scientist',
  'visiting-scientist': 'Visiting Scientist',
  'admin': 'Administrator',
  'alumni': 'Alumni',
};

// Roles shown as large "lead" cards vs. the smaller researcher cards.
const LEAD_ROLES = ['principal-investigator', 'co-pi'] as const;
const RESEARCHER_ROLES = ['postdoc', 'phd-student', 'research-scientist', 'visiting-scientist'] as const;

export interface TeamCardMember {
  name: string;
  roleLabel: string;
  title: string;
  photoSrc?: string;
  bio: string;
  links?: CollectionEntry<'team'>['data']['links'];
}

function toCardMember(entry: CollectionEntry<'team'>): TeamCardMember {
  const { name, role, title, photo, bio, links, affiliation } = entry.data;
  // Append the affiliation to the role badge (e.g. "Visiting Scientist, ONO Pharma").
  const roleLabel = affiliation ? `${roleLabels[role]}, ${affiliation}` : roleLabels[role];
  return { name, roleLabel, title, photoSrc: teamPhoto(photo), bio, links };
}

// Visible (non-hidden) team members, split into the page's two card tiers and
// sorted by `order`. Hidden members (e.g. pending sign-off) are excluded.
export async function getTeamGrouped(): Promise<{ leads: TeamCardMember[]; researchers: TeamCardMember[] }> {
  const members = (await getCollection('team', ({ data }) => !data.hidden)).sort(
    (a, b) => a.data.order - b.data.order
  );

  const leads = members
    .filter((m) => (LEAD_ROLES as readonly string[]).includes(m.data.role))
    .map(toCardMember);
  const researchers = members
    .filter((m) => (RESEARCHER_ROLES as readonly string[]).includes(m.data.role))
    .map(toCardMember);

  return { leads, researchers };
}
