import type { CollectionEntry, CollectionKey } from 'astro:content';

interface Node<T extends CollectionKey> {
  name: string;
  children?: Node<T>[];
  entry?: CollectionEntry<T>; // 存储 CollectionEntry 对象
}

function EntryTreeBuilder<T extends CollectionKey>(
  type: 'series' | 'time' = 'series',
): BaseTreeBuilder<T> {
  switch (type) {
    case 'series':
      return new FileTreeBuilder<T>();
    case 'time':
      return new TimeTreeBuilder<T>();
    default:
      throw new Error('Invalid type.');
  }
}
abstract class BaseTreeBuilder<T extends CollectionKey> {
  // 通用的先序遍历方法
  public *traverseTree(
    node: Node<T>,
  ): Generator<CollectionEntry<T>, void, any> {
    if (node.entry) {
      yield node.entry;
    }

    if (node.children) {
      for (const child of node.children) {
        yield* this.traverseTree(child);
      }
    }
  }

  // 通用的打平树方法
  public flattenTree(node: Node<T>): CollectionEntry<T>[] {
    const result: CollectionEntry<T>[] = Array.from(this.traverseTree(node));
    return result;
  }

  // 合并不含文件的目录节点（通用方法）
  protected mergeDirectories(node: Node<T>): Node<T> {
    if (node.children) {
      // 递归处理子节点
      node.children = node.children.map((child) =>
        this.mergeDirectories(child),
      );

      // 如果当前节点的子节点中只有一个目录节点，且没有文件节点，则合并
      if (
        node.children.length === 1 &&
        !node.children[0].entry &&
        node.children[0].children
      ) {
        return {
          name: `${node.name}/${node.children[0].name}`,
          children: node.children[0].children,
        };
      }
    }
    return node;
  }

  // 抽象方法，子类必须实现
  public abstract buildTree(entries: CollectionEntry<T>[]): Node<T>;
}
class FileTreeBuilder<T extends CollectionKey> extends BaseTreeBuilder<T> {
  public buildTree(entries: CollectionEntry<T>[]): Node<T> {
    const root: Node<T> = { name: '', children: [] };

    for (const entry of entries) {
      if (!entry.filePath) {
        throw new Error(`Entry ${entry.id} has no filePath.`);
      }

      const parts = entry.filePath.split('/');
      let currentLevel = root;

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const isFile = i === parts.length - 1;

        let node = currentLevel.children?.find((child) => child.name === part);

        if (!node) {
          node = { name: part };
          if (!currentLevel.children) {
            currentLevel.children = [];
          }
          // 按顺序插入节点
          if (entry.data.type === 'series') {
            currentLevel.children.unshift(node);
          } else {
            currentLevel.children.push(node);
          }
        }

        if (isFile) {
          // 如果是文件，将 entry 对象存储到节点中
          node.entry = entry;
        } else if (!node.children) {
          // 如果是目录，初始化 children 数组
          node.children = [];
        }

        currentLevel = node;
      }
    }

    return this.mergeDirectories(root);
  }
}

class TimeTreeBuilder<T extends CollectionKey> extends BaseTreeBuilder<T> {
  public buildTree(entries: CollectionEntry<T>[]): Node<T> {
    // 这里可以实现按时间排序的逻辑
    throw new Error('Time-based tree building is not implemented yet.');
  }
}

export function buildFileTree<T extends CollectionKey>(
  entries: CollectionEntry<T>[],
): Node<T> {
  // 先按创建日期对 entries 进行排序
  //entries.sort((a, b) => new Date(a.data.createdAt).getTime() - new Date(b.data.createdAt).getTime());

  const root: Node<T> = { name: '', children: [] };

  for (const entry of entries) {
    if (!entry.filePath) {
      throw new Error(`entry ${entry.id} has no filePath`);
    }
    const parts = entry.filePath.split('/');
    let currentLevel = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;

      // 查找或创建当前层级的节点
      let node = currentLevel.children?.find((child) => child.name === part);

      if (!node) {
        node = { name: part };
        if (!currentLevel.children) {
          currentLevel.children = [];
        }
        // 按顺序插入节点
        if (entry.data.type === 'series') currentLevel.children.unshift(node);
        else currentLevel.children.push(node);
      }

      if (isFile) {
        // 如果是文件，将 entry 对象存储到节点中
        node.entry = entry;
      } else if (!node.children) {
        // 如果是目录，初始化 children 数组
        node.children = [];
      }

      currentLevel = node;
    }
  }

  // 合并不含文件的目录节点
  const mergeDirectories = (node: Node<T>): Node<T> => {
    if (node.children) {
      // 如果当前节点有子节点，递归处理子节点
      node.children = node.children.map((child) => mergeDirectories(child));

      // 如果当前节点的子节点中只有一个目录节点，且没有文件节点，则合并
      if (
        node.children.length === 1 &&
        !node.children[0].entry &&
        node.children[0].children
      ) {
        return {
          name: `${node.name}/${node.children[0].name}`,
          children: node.children[0].children,
        };
      }
    }
    return node;
  };

  return mergeDirectories(root);
}

export function flattenTree<T extends CollectionKey>(
  node: Node<T>,
  result: CollectionEntry<T>[] = [],
): CollectionEntry<T>[] {
  // 如果当前节点有 entry，加入结果数组
  if (node.entry) {
    result.push(node.entry);
  }

  // 递归处理子节点
  if (node.children) {
    for (const child of node.children) {
      flattenTree(child, result);
    }
  }

  return result;
}

export { BaseTreeBuilder, FileTreeBuilder, TimeTreeBuilder, EntryTreeBuilder };
