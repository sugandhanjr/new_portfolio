import { PropsWithChildren } from "react"

export const HeroOrbit = ({children ,size, rotation }: PropsWithChildren<{size: number;rotation:number;  }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="border border-red-500 rotate-45" 
      style={{
        transform: `rotate(${rotation}deg)`,    
        height: `${size}px`,
        width: `${size}px`,
      }}>
        <div className="border border-red-500 inline-flex">
          style={{
            transform: `rotate(${rotation * -1} deg)`,
          }}
          {children}
        </div>
      </div>
    </div>
  )
}