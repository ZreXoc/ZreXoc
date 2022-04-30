import { FC } from 'react';
import { Header } from './Header';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="content-center flex flex-col h-screen overflow-hidden">
      <Header></Header>
      <main className="flex-grow bg-purple-300 w-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
};
