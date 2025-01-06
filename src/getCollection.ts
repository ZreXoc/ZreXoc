import { getCollection } from 'astro:content';
import { EntryTreeBuilder } from './utils/content';

export function getBlogCollection(sortMethod: 'series' | 'time' = 'series') {
  return getCollection('blog', ({ data }) => {
    return !data.draft;
  }).then((collection) => {
    const builder = EntryTreeBuilder(sortMethod);
    const tree = builder.buildTree(collection);

    tree.children?.forEach((child) => {
      let preview: any;
      builder.traverseTree(child).forEach((entry) => {
        if (entry.data.preview) preview = entry.data.preview;
        else entry.data.preview = preview;
      });
    });

    const entries = builder.flattenTree(tree);
    return entries;
  });
}
