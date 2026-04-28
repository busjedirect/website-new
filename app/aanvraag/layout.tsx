import { SiteHeader } from "@/components/layout/site-header";

export default function AanvraagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
