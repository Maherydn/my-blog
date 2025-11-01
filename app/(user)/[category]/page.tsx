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

  // Fetch côté serveur pour SSR / SSG
  // const data: InitialData = await fetchPostsByCategory(category);

  // if (!data?.success) notFound();

  return <CategoryClient category={category}  />;
}
