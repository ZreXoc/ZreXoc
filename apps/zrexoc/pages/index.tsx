import { NextPage } from 'next';
import Link from 'next/link';

export const Index: NextPage = () => {
  return (
    <article className="mx-16 my-16 prose lg:prose-xl w-full ">
      <h1>{`Hi, it's Xichen`}</h1>
      <p>{`I'm a senior school student interested in frontend.`}</p>
      <p className="flex w-72 justify-around">
        <Link href={'/blog'}>
          <a className="link">blog</a>
        </Link>
        <span>|</span>
        <Link href={'/playground'}>
          <a className="link">playground</a>
        </Link>
        <span>|</span>
        <Link href={'/about'}>
          <a className="link">about</a>
        </Link>
      </p>
    </article>
  );
};

export default Index;
