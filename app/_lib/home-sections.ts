export const homeSectionIds = {
  home: "inicio",
  services: "services",
  portfolio: "portfolio",
  blogPreview: "blog-preview",
  about: "about",
  contact: "contact",
} as const;

export type HomeSectionId =
  (typeof homeSectionIds)[keyof typeof homeSectionIds];

const homeSectionIdSet: ReadonlySet<string> = new Set(
  Object.values(homeSectionIds),
);

export function isHomeSectionId(sectionId: string): sectionId is HomeSectionId {
  return homeSectionIdSet.has(sectionId);
}
