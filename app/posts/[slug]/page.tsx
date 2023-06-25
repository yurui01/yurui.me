import { format, parseISO } from "date-fns";
import { Post, allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDX } from "@/components/MDX";

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post: any) => post.slug === params.slug);
  if (!post) {
    return;
  }
  const { title } = post;

  return { title };
}

export default async function PostLayout({ params }) {
  // decode the slug
  const url = decodeURIComponent(params.slug);
  const post: any = allPosts.find((post) => post._raw.flattenedPath === url);
  if (!post) {
    notFound();
  }

  return (
    <article className="py-8 mx-auto max-w-2xl px-4 lg:px-0">
      <div className="mb-12 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-2xl">{post.title}</h1>
      </div>
      <MDX code={post.body.code} />
    </article>
  );
}
