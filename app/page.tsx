"use client"
import React from 'react';
import Section1 from './components/section/section1';
import Section2 from './components/section/section2';
import Section3 from './components/section/section3';
import Section4 from './components/section/section4';

export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
     <section id='Home' className='flex justify-center'>
        <Section1 />
     </section>
     <section id='About' className='mt-20 mb-20'>  
        <Section2 />
      </section>
      <section id='Project' className='mt-20 mb-20'>  
        <Section3 />
      </section>
       <section id='Contact' className='mt-20 mb-20'>  
        <Section4 />
      </section>
    </main> 
  );
}

