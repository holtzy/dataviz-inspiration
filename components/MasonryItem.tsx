import Image from "next/image";
import { VizItem } from "../util/viz-list";

export const MasonryItem = ({ vizItem }: { vizItem: VizItem }) => {
  return (
    <div className="mb-4">
      <Image
        src={require(`../public/img/${vizItem.img}`)}
        placeholder="blur"
        className="rounded-md border border-purple-500"
      />
    </div>
  );
};
