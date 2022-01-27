import Image from "next/image";
import { VizItem } from "../util/viz-list";

export const MasonryItem = ({ vizItem }: { vizItem: VizItem }) => {
  return (
    <div className="my-2 image-wrapper">
      <Image
        src={require(`../public/img/${vizItem.img}`)}
        placeholder="blur"
        className=""
      />
    </div>
  );
};
