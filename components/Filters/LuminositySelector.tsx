import { Luminosity } from "../../util/viz-list";
import { buildUrlWithUpdatedParam } from "../../util/build-url-with-updated-param";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

type LuminositySelectorProps = {
  luminosity: Luminosity[] | undefined;
};

export const LuminositySelector = ({ luminosity }: LuminositySelectorProps) => {
  const sunLink = buildUrlWithUpdatedParam("luminosity", "light");
  const moonLink = buildUrlWithUpdatedParam("luminosity", "dark");

  const activeClass =
    "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100";
  const inactiveClass =
    "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40";

  return (
    <div className="flex">
      <Link href={sunLink}>
        <Sun
          className={
            luminosity?.includes("light") ? activeClass : inactiveClass
          }
        />
      </Link>
      <Link href={moonLink}>
        <Moon
          className={luminosity?.includes("dark") ? activeClass : inactiveClass}
        />
      </Link>
    </div>
  );
};
