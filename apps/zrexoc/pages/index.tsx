import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const NavItem: FC<{
  title: string;
  bg: number;
  to: string;
}> = ({ title, bg, to }) => {
  return (
    <div
      className="relative w-[280px] h-[70px] leading-[0]"
      /*       style={{
        transform: `translate(${trans[0]}px,${trans[1]}px)`,
      }} */
    >
      <Image src={`/Navigator-${bg}.svg`} layout="fill" alt={title} />
      <Link href={to}>
        <a className="absolute top-0 bottom-0 left-0 right-0 m-0 py-[6%] font-mono text-center text-3xl">
          {title}
        </a>
      </Link>
    </div>
  );
};

const Navigator: FC = () => {
  return (
    <div className="flex flex-col h-[240px] w-[480px]">
      <div className="w-fit m-1 translate-x-[43px]">
        <NavItem title="blog" bg={0} to="blog" />
      </div>
      <div className="w-fit m-1 translate-x-[0px]">
        <NavItem title="playground" bg={1} to="wiki" />
      </div>
      <div className="translate-x-[20px]">
        <div className="w-fit m-1 translate-x-[100px]">
          <NavItem title="about" bg={2} to="blog" />
        </div>
        <div className="w-fit m-1 translate-x-[-33px] translate-y-[-74px]">
          <NavItem title="setting" bg={3} to="blog" />
        </div>
      </div>
      <div className="w-fit m-1 translate-x-[260px] translate-y-[-280px]">
        <div className="relative w-[170px] h-[170px] leading-[0]">
          <Image src={`/Navigator-4.svg`} layout="fill" alt="hi" />
          <Link href={'to'}>
            <a className="absolute top-0 bottom-0 left-0 right-0 m-0 py-[40%] font-mono text-center text-3xl">
              {'wiki'}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Index: NextPage = () => {
  return (
    <div className='flex flex-row h-full w-full overflow-hidden items-center'>
      <div className="w-fit h-fit ml-16">
        <Navigator />
      </div>
    </div>
  );
};

export default Index;
