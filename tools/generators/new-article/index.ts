// tools/generators/new-article/index.ts
import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';

interface NewArticleSchemaOptions {
  type: 'blog' | 'wiki';
  title: string;
  path?: string;
  author: string;
  category: string;
  tags: string;
  excerpt?: string;
}

export default async function (host: Tree, schema: NewArticleSchemaOptions) {
  const creationTime =  new Date()
  generateFiles(
    // virtual file system
    host,

    // the location where the template files are
    joinPathFragments(__dirname, './files'),

    // where the files should be generated
    `./_articles/${schema.type}/`,

    // the variables to be substituted in the template
    {
      title: schema.title,
      author: schema.author,
      category: schema.category,
      tags: schema.tags
        .split(' ')
        .map((s) => `'${s}'`)
        .join(', '),
      excerpt: schema.excerpt || '',
      normalizedTitle:
        schema.path !== '' ? schema.path : names(schema.title).fileName,
      creationTime:creationTime.toISOString(),
    }
  );

  await formatFiles(host);
}
