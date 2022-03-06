import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { Luminosity } from "../../util/viz-list";

type LuminositySelectorProps = {
  selectedLuminosities: Luminosity[];
  updateLuminosity: (arg: Luminosity[]) => void;
};

export const LuminositySelector = ({
  selectedLuminosities,
  updateLuminosity,
}: LuminositySelectorProps) => {
  return (
    <div className="flex">
      <SunIcon
        onClick={() =>
          selectedLuminosities.includes("light")
            ? updateLuminosity(
                selectedLuminosities.filter((l) => l !== "light")
              )
            : updateLuminosity([...selectedLuminosities, "light"])
        }
        className={
          selectedLuminosities.includes("light")
            ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
            : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
        }
      />
      <MoonIcon
        onClick={() =>
          selectedLuminosities.includes("dark")
            ? updateLuminosity(selectedLuminosities.filter((l) => l !== "dark"))
            : updateLuminosity([...selectedLuminosities, "dark"])
        }
        className={
          selectedLuminosities.includes("dark")
            ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
            : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
        }
      />
    </div>
  );
};
