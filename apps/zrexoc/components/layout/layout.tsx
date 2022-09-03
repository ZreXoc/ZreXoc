import { FC } from 'react';
import { Header } from './header';

export interface LayoutProps {
  title: string;
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="content-center flex flex-col h-screen overflow-hidden">
      <Header title={title}></Header>
      <main className="container mx-auto flex flex-grow overflow-y-auto text-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
