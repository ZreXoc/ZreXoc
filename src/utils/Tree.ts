export class Node<T, K = T> {
  data: T;
  children: K extends null ? null : Node<K>[];

  constructor(data: T, children?: Node<K>[]) {
    this.data = data;
    this.children = children ?? null;
  }

  preOrderTraversal(callback: (node: Node<T | K>) => void) {
    callback(this);
    this.children?.forEach((child) => child.preOrderTraversal(callback));
  }

  postOrderTraversal(callback: (node: Node<T | K>) => void) {
    this.children?.forEach((child) => child.preOrderTraversal(callback));
    callback(this);
  }

  *traversal(type: 'layer' | 'pre' | 'post') {
    const array = [];
    switch (type) {
      case 'layer':
        const list: Node<T | K>[] = [this];
        while (list.length) {
          const node = list.pop();
          if (node?.children) array.push(...node.children);
          yield node;
        }
        break;

      case 'pre':
        this.preOrderTraversal((node) => yield node);
        break;

      case 'post':
        this.postOrderTraversal((node) => yield node);
        break;
    }
  }

  toArray(type: 'layer' | 'pre' | 'post') {
    return this.traversal(type).toArray();
  }

  addChild(...data: K[]) {
    if (!this.children) this.children = [] as Node<K>[];
    this.children.push(...data.map((d) => new Node<K>(d, [])));
  }
}

export class Tree<T, K = T> extends Node<T, K> { }

export class Forest<K> extends Tree<null, K> {
  constructor(children: Tree<K>[] = []) {
    super(null, children);
  }
}
export class OrderedTree<T> extends Tree<T> {
  compare: (a: Node<T>, b: Node<T>) => number;
  constructor(
    compare: (a: Node<T>, b: Node<T>) => number,
    data: T,
    children?: Node<T>[],
  ) {
    super(data, children);
    this.compare = compare;
  }

  addChild(...data: T[]): void {
    data.forEach((data) => { });
  }
}
