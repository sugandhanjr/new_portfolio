import memojiImage from '@/assets/images/memoji-computer.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return(
    <div className="py-32">
      <div className="cotainer">
        <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size=[100px]"alt="Person peeking from behind laptop" />
      <div>
      <div></div>
      <div>Available for new Projects</div>
    </div>
    </div>
    <h1>Building Exceptional User Experiences</h1>
    <p> Explore my projects and see my passion for creativity and innovation. Thank you for visiting!

</p>
<div>
  <button> 
    <span>Explore My Work</span>
    <ArrowDown/> 
  </button>
  <button>
    <span>👋</span>
    <span>Let's Connect</span>
  </button>
</div>
  </div>
  </div> 
  );
};
