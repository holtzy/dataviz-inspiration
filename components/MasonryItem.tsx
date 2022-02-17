import Image from "next/image";
import { VizItem } from "../util/viz-list";

type MasonryItemProps = {
  vizItem: VizItem;
  onClick: (arg: VizItem) => void;
  imgId: number;
};

export const MasonryItem = ({ vizItem, onClick, imgId }: MasonryItemProps) => {
  const month = vizItem.date.toLocaleString("default", { month: "long" });
  const year = vizItem.date.toLocaleString("default", { year: "numeric" });

  return (
    <div
      className="relative cursor-pointer border-black group overflow-hidden"
      onClick={() => onClick(vizItem)}
    >
      <Image
        src={require(`../public/img/${vizItem.imgZoomed[imgId]}`)}
        placeholder="blur"
        className="rounded-md"
        layout="intrinsic" // intrinsic is the default
      />
      <div className="rounded-md absolute transition-all duration-700 -left-full group-hover:left-0 top-0 w-full h-full bg-slate-800 opacity-90 flex items-center justify-center">
        {/* <div className="rounded-md absolute transition-all duration-700 left-0 top-0 w-full h-full bg-slate-800 opacity-90 flex items-center justify-center"> */}
        <div className="absolute pr-10 top-12 left-5">
          <p className="text-md text-white font-bold">{vizItem.title}</p>
          <p className="text-md text-white italic opacity-75 mt-2">
            {vizItem.author}
          </p>
        </div>
        <div className="absolute pr-10 bottom-6 left-5">
          <p className="text-md text-white text-xs opacity-75 mt-2">
            {month + " " + year}
          </p>
        </div>
      </div>
    </div>
  );
};
