import { PropsWithChildren } from "react";

interface HeroOrbitProps extends PropsWithChildren {
  size?: number; // Optional size prop
}

export const HeroOrbit = ({ children, size = 800 }: HeroOrbitProps) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div
        className='border border-red-500'
        style={{
          height: `${size}px`,
          width: `${size}px`,
          animationDuration: '30s',
        }}
      >
        <div className='border border-red-500 inline-flex'>{children}</div>
      </div>
    </div>
  );
};
