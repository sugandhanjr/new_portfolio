import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const ToolboxItems = ({
  items,
  className,
}: {
  items: {
    title: string;
    iconType: React.ElementType; // Fixed naming to match data array
  }[];
  className?:string;
}) => {
  return (
    <div className= {twMerge("flex mask-image: liner-gradient(to_right,transparent,black_10%,black_90%,transparent)",className)}>
        <div className="flex flex-none py-0.5 gap-6 " >
      {items.map((item) => (
        <div
          key={item.title}
          className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-outline/10 rounded-lg"
        >
          <TechIcon component={item.iconType} /> {/* Updated iconType */}
          <span className="font-semibold">{item.title}</span>
        </div>
      ))}
    </div>
    </div>
  ); 
};
