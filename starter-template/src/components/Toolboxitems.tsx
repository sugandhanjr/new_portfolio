import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType; // Fixed naming to match data array
  }[];
  className?: string;
  itemsWrapperClassName?:string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-wrap gap-6 mask-image: [linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6",
        itemsWrapperClassName)}>
      {items.map((item) => (
        <div
          key={item.title}
          className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-black/10 rounded-lg"
        >
          <TechIcon component={item.iconType} />
          <span className="font-semibold">{item.title}</span>
        </div>
      ))}
    </div>
    </div> 
  );
};
