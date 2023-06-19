// contentlayer.config.ts
import { defineDocumentType, makeSource } from "@contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
