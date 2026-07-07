import type { HomeSectionId } from "@/app/_lib/home-sections";
import { isAppLocale } from "@/i18n/routing";
import { notFound, redirect } from "next/navigation";

export async function redirectToHomeSection(
  params: Promise<{ locale: string }>,
  sectionId: HomeSectionId,
) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  redirect(`/${locale}#${sectionId}`);
}
