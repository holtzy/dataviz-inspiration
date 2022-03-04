type PillProps = {
  text: string;
  className?: string;
  color?: string;
};

// Let's make sure all pills in the app look pretty much the same
// Thanks to this Pill component.

// Note: className can be used to pass a class like "distribution"
// This class is encoded in global.css and provides the appropriate color
export const Pill = ({ text, className, color }: PillProps) => {
  return (
    <span
      className={
        className + " " + color + " border rounded-md px-2 py-1 text-xs"
      }
    >
      {text}
    </span>
  );
};
