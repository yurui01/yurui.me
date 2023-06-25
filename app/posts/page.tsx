import { allPosts, Post } from "contentlayer/generated";
import { parseISO, format } from "date-fns";

export default function Posts() {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="w-full lg:mt-32">
      <h1 className="text-5xl font-bold tracking-tight">
        Writing on software develop
      </h1>
      <div className="border-l border-zinc-200 px-4 mt-12">
        {posts.map((post: Post) => (
          <div key={post._id} className="mt-8 flex items-start">
            <p className="mt-2 text-sm text-gray-500 px-4 pt-3">
              <time dateTime={post.date}>
                {format(parseISO(post.date), "MMMM dd, yyyy")}
              </time>
            </p>
            <a
              href={`/posts/${post._raw.flattenedPath}`}
              className="rounded-xl p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800 max-w-xl w-full"
            >
              <div className="flex flex-col">
                <h2 className="font-semibold">{post.title}</h2>
                <p className="text-gray-500 mt-2 text-sm tracking-wider leading-relaxed line-clamp-4">
                  {post.summary}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
