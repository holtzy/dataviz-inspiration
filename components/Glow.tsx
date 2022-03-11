type GlowProps = {
  children: React.ReactNode;
};

export const Glow = (props: GlowProps) => {
  const { children } = props;

  return (
    <div className="group">
      <div className="absolute -inset-0.5 bg-brandLight rounded-md blur-lg opacity-0 group-hover:opacity-60 transition duration-1000 group-hover:duration-1000 animate-tilt"></div>
      <div className="relative px-2 py-2 bg-gray-100 rounded-md leading-none flex items-center">
        {children}
      </div>
    </div>
  );
};
