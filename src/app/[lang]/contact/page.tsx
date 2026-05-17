import { notFound } from "next/navigation";
import ContactPage from "../../contact/page";

const SUPPORTED = ["en", "id"];

export default function LocaleContactPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  if (!SUPPORTED.includes(lang)) return notFound();
  return <ContactPage />;
}
