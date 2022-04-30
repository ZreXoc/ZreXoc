import { FC } from 'react';
import { Header } from './Header';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="content-center flex flex-col h-screen">
      <Header></Header>
      <main className="flex-grow bg-purple-300 prose lg:prose-xl">
        {children}
      </main>
    </div>
  );
};
