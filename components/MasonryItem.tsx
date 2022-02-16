import Image from "next/image";
import { VizItem } from "../util/viz-list";

type MasonryItemProps = {
  vizItem: VizItem;
  onClick: (arg: VizItem) => void;
  imgId: number;
};

export const MasonryItem = ({ vizItem, onClick, imgId }: MasonryItemProps) => {
  return (
    <div
      className="image-wrapper cursor-pointer "
      onClick={() => onClick(vizItem)}
    >
      <Image
        src={require(`../public/img/${vizItem.imgZoomed[imgId]}`)}
        placeholder="blur"
        className="rounded-md"
      />
    </div>
  );
};
