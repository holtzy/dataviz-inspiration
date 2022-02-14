import Image from "next/image";
import { VizItem } from "../util/viz-list";

type MasonryItemProps = {
  vizItem: VizItem;
  onClick: (arg: VizItem) => void;
};
export const MasonryItem = ({ vizItem, onClick }: MasonryItemProps) => {
  return (
    <div
      className="image-wrapper cursor-pointer "
      onClick={() => onClick(vizItem)}
    >
      <Image
        src={require(`../public/img/${vizItem.img}`)}
        placeholder="blur"
        className="rounded-md"
      />
    </div>
  );
};
