import { XIcon } from "@heroicons/react/outline";

type FilterResetProps = {
  onClick: () => void;
};

export const FilterReset = ({ onClick }: FilterResetProps) => {
  return (
    <div className="flex">
      <XIcon
        onClick={onClick}
        className="cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
      />
    </div>
  );
};
