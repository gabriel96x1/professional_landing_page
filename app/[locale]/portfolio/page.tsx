import { homeSectionIds } from "@/app/_lib/home-sections";
import { redirectToHomeSection } from "@/app/_lib/section-redirects";

export default async function PortfolioRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await redirectToHomeSection(params, homeSectionIds.portfolio);
}
