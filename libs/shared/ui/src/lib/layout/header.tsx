import { FC } from 'react';

export interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-7 pl-2 pr-2 bg-purple-700 text-white">
      <span>{title}</span>
    </header>
  );
};

export default Header;
