type ParallaxSectionProps = {
  height: number;
  imgLink: string;
  opacity: number;
};

export const ParallaxSection = ({
  imgLink,
  height,
  opacity,
}: ParallaxSectionProps) => {
  return (
    <div
      style={{
        backgroundImage: "url(" + imgLink + ")",
        minHeight: height,
        backgroundAttachment: "fixed",
        opacity,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mt-12"
    ></div>
  );
};
