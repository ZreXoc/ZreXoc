import { FC } from 'react';
import Image from 'next/image'

export interface NavigatorProps {
  title: string;
  type: 0 | 1 | 2 | 3 | 4;
  onClick: () => any;
}

export const Navigator: FC<NavigatorProps> = ({ title, type, onClick }) => {
  return (
    <div
      className={
        'h-[100px] w-[400px] table-cell bg-auto bg-no-repeat text-3xl text-center align-middle font-mono'
      }
      style={
          {
              backgroundImage:`url('/Navigator-${type}.svg')`
          }
      }
    >
        <Image src={`/Navigator-${type}.svg`} layout="fill"></Image>
      {title}
    </div>
  );
};

export default Navigator;
