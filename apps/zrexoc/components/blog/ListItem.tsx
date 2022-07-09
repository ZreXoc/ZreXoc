import { FC, useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BlogContext } from '../../contexts/BlogContext';
import { useRouter } from 'next/router';

export interface ListItemProps {
  title: string;
  category: string;
  tags: string[];
  transRelatedFrom?: number;
}

export const ListItem: FC<ListItemProps> = ({
  title,
  category,
  tags,
  transRelatedFrom = 0,
}) => {
  const [trans, setTrans] = useState(0);
  const listRef = useRef<HTMLLIElement>(null);

  const { selected, selectPost } = useContext(BlogContext);
  const isSelected = selected === title;

  const route = useRouter();

  useEffect(() => {
    if (isSelected) {
      if (trans !== 0) setTrans(0);
      return;
    }

    const ele = listRef.current as HTMLLIElement;
    if (
      ele.offsetTop + ele.offsetHeight - (ele.parentElement?.scrollTop || 0) <
      0
    )
      return;
    const newTrans = ele.offsetTop - transRelatedFrom;
    // if (selected) trans += 50;
    setTrans(newTrans > 0 ? newTrans * 0.3 : -newTrans * 0.2);
  }, [transRelatedFrom, isSelected]);

  return (
    <li
      ref={listRef}
      className="list-none relative w-[546.67px] h-[80px] my-3 cursor-pointer"
      style={{
        transform: `translateX(${trans}px)`,
      }}
      onClick={() =>
        isSelected ? route.push(`/blog/${title}`) : selectPost(title)
      }
    >
      <Image
        className="absolute left-0 top-0 right-0 bottom-0 z-0"
        src="/blog/ListItem.svg"
        layout="fill"
        alt={title}
      ></Image>
      <div className="relative z-10 h-full leading-[0]">
        <span
          className={
            isSelected
              ? 'table-cell h-[59px] w-full pl-14 align-middle text-3xl text-blue-700'
              : 'table-cell h-[59px] w-full pl-14 align-middle text-3xl'
          }
        >
          {title}
        </span>
        <br />
        <span className="table-cell h-[21px] w-full pl-16 align-middle text-sm">
          {`${category} | ${tags.join(',')}`}
        </span>
      </div>
    </li>
  );
};
