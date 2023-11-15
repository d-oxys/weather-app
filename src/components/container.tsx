'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

function Container({ children }: CardProps) {
  return (
    <section className='bg-gradient-bright min-h-screen'>
      <div className='mx-auto flex flex-col items-center px-6 py-8 lg:py-0'>
        <div className='my-5 overflow-auto rounded-sm bg-transparent text-white md:w-[65%]'>{children}</div>
      </div>
    </section>
  );
}

export default Container;
