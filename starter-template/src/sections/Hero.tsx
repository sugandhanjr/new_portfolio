import memojiImage from '@/assets/images/memoji-computer.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from '@/assets/icons/star.svg';
import SparkeIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return(
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className='absolute inset-0 [mask-image:liner-gradient(to_bottom,transoarent,black_10%,black_70%,transparent)]'>
      <div className='absolute inset-0 -z-30 opacity-5'
       style={{
        backgroundImage: `url(${grainImage.src})`,}}
        ></div>
      <div className=' size-[850px] hero-ring'></div>
      <div className=' size-[1020px] hero-ring'></div>
      <div className=' size-[1220px] hero-ring'></div>
      <div className=' size-[1420px] hero-ring'></div>
      <HeroOrbit size={800} rotation={-72}>
      <StarIcon className=" size-28 text-emerld-300"/>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>   
      <StarIcon className=" size-12 text-emerld-300"/>
      </HeroOrbit>
      <HeroOrbit size={590} rotation={ 98}>   
      <StarIcon className=" size-8  text-emerld-300"/>
      </HeroOrbit>  
      <HeroOrbit size={430} rotation={ -14}>   
      <SparkeIcon className=" size-8  text-emerld-300/20"/>
      </HeroOrbit>  
      <HeroOrbit size={440} rotation={ 79}>   
      <SparkeIcon className=" size-5   text-emerld-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={ 178}>   
      <SparkeIcon className=" size-10  text-emerld-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={ 144}>   
      <SparkeIcon className=" size-14  text-emerld-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={720} rotation={ 85}>   
      <SparkeIcon className=" size-3 rounded-full  text-emerld-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={ -41}>   
      <SparkeIcon className=" size-2rounded-full  text-emerld-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5}>   
      <SparkeIcon className=" size-2 rounded-full  text-emerld-300/20"/>
      </HeroOrbit>
      </div>
      <div className="cotainer">
        <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size=[100px]"alt="Person peeking from behind laptop" />
      <div className='bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
      <div className='bg-green-500 size-2.5 rounded-full'></div>
      <div className='text-sm font-medium'>
        Available for new Projects</div>
    </div>
    </div>
    <div className='max-w-lg mx-auto' >
    <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
       Building Exceptional User Experiences</h1>
    <p className='mt-4 text-center text-white/60 md:text-lg'>
       Explore my projects and see my passion for creativity and innovation. Thank you for visiting!

</p>
</div>
<div className='flex flex-col  md:flex-row justify-center items-center mt-8 gap-4'>
  <button className='inline-flex items-center gap-2 border border-whitw/15 px-6 h-12 rounded-xl'> 
    <span className='font-semibold'>Explore My Work</span>
    <ArrowDown className="size-4"/> 
  </button>
  <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl' >
    <span>👋</span> 
    <span className='font-semibold'>Let's Connect</span>
  </button>
</div>
  </div>
  </div> 
  );
};
