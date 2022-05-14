import { FC } from 'react';
import Image from 'next/image';

export interface ListItemProps {
  title: string;
  tags: string;
}

export const ListItemProps: FC<ListItemProps> = ({
  title,
  tags,
}: ListItemProps) => {
  return (
    <li className="list-none relative w-[800px] h-[150px]">
      <Image
        className="absolute left-0 top-0 right-0 bottom-0 z-0"
        src="/ListItem.svg"
        layout="fill"
      ></Image>
      <div className="relative z-10 h-full leading-[0]">
        <span className="table-cell h-[110px] w-full pl-14 align-middle text-3xl">
          {title}
        </span>
        <br />
        <span className="table-cell h-[40px] w-full pl-16 align-middle text-sm">
          {tags}
        </span>
      </div>
    </li>
  );
};

export default ListItemProps;
