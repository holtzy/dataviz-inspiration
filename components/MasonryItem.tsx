import Image from "next/image";
import { VizItem } from "../util/viz-list";
import { LikeButton } from "./LikeButton";

// A "MasonryItem" is just an image displayed on the main wall.
// When hovered, an additional layer appears to provide some more information (with a sliding animation)
// When clicked, a modal with details opens

type MasonryItemProps = {
  vizItem: VizItem;
  onClick: (arg: VizItem) => void;
  imgId: number;
  likeNumber: number;
};

export const MasonryItem = ({
  vizItem,
  onClick,
  imgId,
  likeNumber,
}: MasonryItemProps) => {
  const month = vizItem.date.toLocaleString("default", { month: "long" });
  const year = vizItem.date.toLocaleString("default", { year: "numeric" });

  return (
    <div
      className="relative cursor-pointer group overflow-hidden"
      onClick={() => onClick(vizItem)}
    >
      {/* The next.js Image component is awesome but it is a mess to style it properly since it is wrapped in several spans */}
      <Image
        src={require(`../public/img/${vizItem.img[imgId].zoom}`)}
        placeholder="blur"
        className="rounded-md"
        alt={"Chart showing " + vizItem.title}
      />

      {/* Overlay that appears when hovered. Note the mb-1 that compensate the fact that the next.js Image does not take the full height of the container, no idea why */}
      <div className="hidden sm:flex absolute rounded-md transition-all duration-700 -left-full group-hover:left-0 top-0 w-full bottom-0 bg-slate-800 opacity-90 items-center justify-center mb-1">
        <div className="absolute pr-10 top-12 left-5 ">
          <p className="text-md text-white font-bold">{vizItem.title}</p>
          <p className="text-md text-white italic opacity-75 mt-2">
            {vizItem.author}
          </p>
        </div>

        <div className="absolute pr-10 bottom-6 left-5 flex flex-row w-full justify-between items-center">
          <p className="text-md text-white text-xs opacity-75 mt-2">
            {month + " " + year}
          </p>
          <LikeButton initialLikeNumber={likeNumber} />
        </div>
      </div>
    </div>
  );
};
