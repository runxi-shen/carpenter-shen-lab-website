// Single source of truth for the supported social / profile links.
// SocialLinks.astro (render order + icons), the team schema (validation),
// and the TeamCardMember type all derive from this list, so adding a new
// link type only needs an entry here plus its icon in SocialLinks.astro.
export const SOCIAL_LINKS = [
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'github', label: 'GitHub' },
  { key: 'x', label: 'X (Twitter)' },
  { key: 'cv', label: 'CV' },
] as const;

export type SocialKey = (typeof SOCIAL_LINKS)[number]['key'];
export type SocialLinkSet = Partial<Record<SocialKey, string>>;

export const SOCIAL_KEYS = SOCIAL_LINKS.map((s) => s.key) as SocialKey[];
