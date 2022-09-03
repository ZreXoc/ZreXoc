import { NextPage } from 'next';
import Link from 'next/link';



export const Index: NextPage = () => {
  return (
    <div className="mx-16 my-16 prose lg:prose-xl w-full ">
      <h1>这里是熙晨的个人博客</h1>
      <p className="flex w-72 justify-around">
        <Link href={'/blog'}>
          <a className="link">博客</a>
        </Link>
        <span>|</span>
        <Link href={'/about'}>
          <a className="link">关于</a>
        </Link>
      </p>
    </div>
  );
};

export default Index;
