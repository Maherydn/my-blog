import { redirect } from "next/navigation";
import CategoryClient from "./_components/CategoryClient";

// Liste des catégories pour SSG
const categories = ["food", "tech", "lifestyle", "money"];

export async function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

// Composant serveur
export default async function Page(props: unknown) {
  const { params } = props as { params: { category: string } };
  const category = params.category;

  if (!categories.includes(category)) redirect("/404");

  return <CategoryClient category={category} />;
}
