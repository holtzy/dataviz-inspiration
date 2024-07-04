import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";

type FilterResetProps = {};

export const FilterReset = ({}: FilterResetProps) => {
  return (
    <Link className="flex" href="/">
      <XIcon className="cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40" />
    </Link>
  );
};
