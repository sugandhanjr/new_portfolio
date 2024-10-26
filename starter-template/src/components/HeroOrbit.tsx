import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration = "1s", // Added default value
  shouldSpin = false,
  spinDuration = "1s",  // Added default value
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldOrbit ? "animate-orbit" : "")} // Use an appropriate class for orbit
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin ? "animate-spin" : "")}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`, // Corrected spacing issue
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
