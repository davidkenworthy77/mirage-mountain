import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArticleLayout } from "@/components/ArticleLayout";
import { JsonLd, blogPostSchema, breadcrumbSchema } from "@/components/JsonLd";
import { blogPosts } from "@/data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Mirage Mountain Resort Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogPostSchema(post)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "Blog", url: "https://miragemountainresort.com/blog" },
        { name: post.title, url: `https://miragemountainresort.com/blog/${post.slug}` },
      ])} />
      <Navigation />

      <ArticleLayout
        title={post.title}
        date={post.date}
        author={post.author}
        image={post.image}
        category={post.category}
        backHref="/blog"
        backLabel="All Posts"
      >
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </ArticleLayout>

      <Footer />
    </>
  );
}
