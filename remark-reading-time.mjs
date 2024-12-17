import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    //console.log(11,tree.children)
    //console.log(11,tree.children[tree.children.length-2].children)
    //tree.children[tree.children.length-2].children[0].type = 'inlineMath'
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text 会以友好的字符串形式给出阅读时间，例如 "3 min read"。
    readingTime.text = `${Math.floor(readingTime.minutes)}分钟`
    data.astro.frontmatter.minutesRead = readingTime;
  };
}
