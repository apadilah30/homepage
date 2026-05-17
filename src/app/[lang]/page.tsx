import { notFound } from "next/navigation";
import RootPage from "../page";

const SUPPORTED = ["en", "id"];

export default function LocalePage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  if (!SUPPORTED.includes(lang)) return notFound();
  return <RootPage />;
}
