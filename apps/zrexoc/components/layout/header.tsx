import Link from 'next/link';
import { FC } from 'react';

export interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-7 pl-2 pr-2 bg-slate-500 text-center font-mono text-base text-white">
      <Link href="/"><a className=" text-white">{title}</a></Link>
    </header>
  );
};

export default Header;
