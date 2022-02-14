type PillProps = {
  text: string;
  className?: string;
};

export const Pill = ({ text, className }: PillProps) => {
  return (
    <span className={className + " border rounded-md px-2 py-1 text-xs"}>
      {text}
    </span>
  );
};
