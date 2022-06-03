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
      <main className="flex flex-grow bg-purple-300 w-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
