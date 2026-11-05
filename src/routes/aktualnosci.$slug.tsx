import { createFileRoute, Link } from "@tanstack/react-router";

import { NewsArticlePage, findNews } from "@/components/pko/aktualnosci";

export const Route = createFileRoute("/aktualnosci/$slug")({
  head: () => ({
    meta: [
      { title: "Aktualności | PKO Bank Polski" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsArticleRoute,
});

function NewsArticleRoute() {
  const { slug } = Route.useParams();
  const news = findNews(slug);

  if (!news) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center lg:px-8">
        <h1 className="text-2xl font-extrabold tracking-tight">Nie znaleziono aktualności</h1>
        <p className="mt-3 text-sm text-muted-foreground">Ta informacja nie istnieje lub została usunięta.</p>
        <Link to="/aktualnosci" className="btn-primary mt-8 inline-flex">
          Wszystkie aktualności
        </Link>
      </div>
    );
  }

  return <NewsArticlePage news={news} />;
}
