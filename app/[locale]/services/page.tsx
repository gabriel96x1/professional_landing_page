import { redirectToHomeSection } from "@/app/_lib/section-redirects";

export default async function ServicesRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await redirectToHomeSection(params, "services");
}
