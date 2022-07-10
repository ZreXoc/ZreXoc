import { FrontMatter } from '@zrexoc/markdown';
import { FC } from 'react';

type DetailProps = { data: FrontMatter };

export const Detail: FC<DetailProps> = ({ data }) => {
  return (
    <div className="flex-grow m-12 p-4 min-h-[140px] rounded shadow bg-slate-100">
      <div>
        <span>
          {data.title} by {data.author.name}
        </span>
      </div>
      <div className="divider"></div>
      <div>
        <article className="prose">{data.excerpt}</article>
      </div>
    </div>
  );
};
