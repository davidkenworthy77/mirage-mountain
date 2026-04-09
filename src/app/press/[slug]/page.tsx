import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArticleLayout } from "@/components/ArticleLayout";
import { JsonLd, newsArticleSchema, breadcrumbSchema } from "@/components/JsonLd";
import { pressArticles } from "@/data/press";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return pressArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = pressArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found | Mirage Mountain Resort" };
  }

  return {
    title: `${article.title} | Mirage Mountain Resort`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function PressArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = pressArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <JsonLd data={newsArticleSchema(article)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "Press", url: "https://miragemountainresort.com/press" },
        { name: article.title, url: `https://miragemountainresort.com/press/${article.slug}` },
      ])} />

      <Navigation />

      <main>
        <ArticleLayout
          title={article.title}
          date={article.date}
          author={article.author}
          image={article.image}
          category={article.category}
          backHref="/press"
          backLabel="All Press"
        >
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </ArticleLayout>
      </main>

      <Footer />
    </>
  );
}
