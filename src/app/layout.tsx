import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import Eomji from './../../public/eomji.jpg';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Eomji's blog",
  description: 'Learn to Share, Share to Learn',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} w-screen flex`}>
        <div className='w-[230px] min-h-screen pt-10 border-r'>
          <div className='flex flex-col items-center'>
            <Image
              src={Eomji}
              alt='profile img'
              className='w-[150px] rounded-full'
            />
            <span className='mt-3 font-semibold'>Eomji</span>
          </div>
          <ul className='flex flex-col gap-2 mt-5 w-[150px] mr-auto ml-auto'>
            <li className='p-1 text-sm text-slate-400'>
              <Link href='/'>전체</Link>
            </li>
            <li className='p-1'>
              <Link href='/react'>React</Link>
            </li>
            <li className='p-1'>
              <Link href='/ts'>Typescript</Link>
            </li>
            <li className='p-1'>
              <Link href='/nextjs'>Next.js</Link>
            </li>
            <li className='p-1'>
              <Link href='/cs'>CS</Link>
            </li>
            <li className='p-1'>
              <Link href='/algo'>Algorithm</Link>
            </li>
          </ul>
        </div>
        <div className='min-h-screen flex-[8] pt-10 pl-10 pr-10'>
          {children}
        </div>
      </body>
    </html>
  );
}

