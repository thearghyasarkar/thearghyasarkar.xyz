// contentlayer.config.js
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.md",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "date",
      required: true
    },
    updatedAt: {
      type: "date",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    isPublished: {
      type: "boolean",
      required: true
    },
    author: {
      type: "string",
      required: true
    },
    categories: {
      type: "list",
      of: { type: "string" }
    }
  },
  computedFields: {
    url_path: {
      type: "string",
      resolve: (doc) => `/articles/${doc.slug}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  /* options */
  contentDirPath: "articles/content",
  documentTypes: [Blog]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CZIMSUFE.mjs.map
