import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/solid';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className="flex flex-col w-full px-8 py-4">
      <div className="w-full flex flex-row">
        <div className="mx-8">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {/* <Image src={'/avatar.png'} layout={'fill'} alt={"It's me!"} /> */}
              <Image
                src={'https://avatars.githubusercontent.com/u/61901461?v=4'}
                layout={'fill'}
                className={'mask mask-circle'}
                alt={"It's me!"}
              ></Image>
            </div>
          </div>
        </div>
        <div className="flex-grow p-4">
          <p>熙晨</p>
          <p>十七岁, 是学生</p>
          <p>
            兴趣: 音游(<i>Arcaea, Phigros</i>), 前端, MLP(已淡圈)
          </p>
          <p>
            <LinkIcon className="h-5 w-5 inline" />
            <a href="https://github.com/ZreXoc" className="link">
              github
            </a>
            ,{' '}
            <a href="mailto:zeexoc@outlook.com" className="link">
              email
            </a>
          </p>
        </div>
      </div>
      <div className="divider" />

      <div></div>
    </div>
  );
}

export default About;
