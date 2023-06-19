import { useMDXComponent } from "next-contentlayer/hooks";

export function MDX({ code }) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose xl:prose-base prose-sm sm:prose-sm lg:prose-base md:prose-base max-w-none prose-quoteless prose-neutral dark:prose-invert">
      <Component />
    </article>
  );
}
