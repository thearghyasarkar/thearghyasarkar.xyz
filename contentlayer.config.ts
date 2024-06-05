import { makeSource, defineDocumentType } from '@contentlayer/source-files'

const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: '**/*.mdx',
    contentType: "mdx",
    fields: {
      
      title: {
        type: 'string',
        required: true,
      },
      publishedAt: {
        type: 'date',
        required: true,
      },
      updatedAt: {
        type: 'date',
        required: true,
      },
      description: {
        type: 'string',
        required: true,
      },
      isPublished: {
        type: 'boolean',
        required: true,
      },
      author: {
        type: 'string',
        required: true,
      },
      categories: {
        type: 'list',
        of: { type: 'string' },
      },
    },

    computedFields: {
        url_path: {
          type: 'string',
          resolve: (doc) => `/writing/${doc._raw.sourceFileDir.replace('.mdx', '')}`,
        },
      }
  }))

export default makeSource({
  /* options */
  contentDirPath: 'articles/content',
  documentTypes : [Blog]
})