import { FrontMatter } from '@zrexoc/markdown';
import { FC } from 'react';

type DetailProps = { data: FrontMatter };

export const Detail: FC<DetailProps> = ({ data }) => {
  return (
    <div className="flex-grow m-12 p-4 min-h-[140px] rounded drop-shadow-md hover:drop-shadow-xl bg-slate-300 text-slate-800">
      <div>
        <span>
          {data.title} by {data.author.name} -{' '}
          {new Date(data.time).toLocaleDateString()}
        </span>
      </div>
      <div className="divider"></div>
      <div>
        <article className="prose text-slate-700">{data.excerpt}</article>
      </div>
    </div>
  );
};
