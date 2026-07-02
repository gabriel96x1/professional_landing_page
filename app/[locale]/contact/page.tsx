import { redirectToHomeSection } from "@/app/_lib/section-redirects";

export default async function ContactRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await redirectToHomeSection(params, "contact");
}
