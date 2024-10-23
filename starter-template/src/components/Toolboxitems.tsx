import { TechIcon } from "./TechIcon"

export const ToolboxItems = ({ items,}:{
    items: {
        title:string;
        icontype:React.ElementType;
    }[];

}) => {
    return (
        <div>
            {items.map((item) => (
              <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-outline/10 rounded-lg">
                <TechIcon component={item.icontype} /> {/* Pass the icon reference here */}
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </div>   
    )
}