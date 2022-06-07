import { FrontMatter } from '@zrexoc/markdown';
import { FC } from 'react';

type DetailProps = { data: FrontMatter };

export const Detail: FC<DetailProps> = ({ data }) => {
  return (
    <>
      <div>
        <span>
          {data.title} by {data.author.name}
        </span>
      </div>
      <div className="divider"></div>
      <div>
        <article className="prose">{data.excerpt}</article>
      </div>
    </>
  );
};
