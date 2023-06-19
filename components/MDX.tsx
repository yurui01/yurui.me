import { useMDXComponent } from "next-contentlayer/hooks";

export function MDX({ code }) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose max-w-none prose-quoteless prose-neutral dark:prose-invert">
      <Component />
    </article>
  );
}
