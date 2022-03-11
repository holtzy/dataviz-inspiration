import Link from "next/link";

type LinkAsButtonProps = {
  isDisabled?: boolean;
  isFilled?: boolean;
  children: any;
  href: string;
  size?: "sm" | "md";
  isFaded?: boolean;
};

export const LinkAsButton = ({
  children,
  href,
  isFilled,
  size = "md",
  isFaded,
}: LinkAsButtonProps) => {
  const isOutsideLink = href.startsWith("www") || href.startsWith("http");

  let appearance =
    "font-normal rounded m-1 cursor-pointer border-brand border ";

  if (isFilled) {
    appearance += " bg-purple-500 hover:bg-brand text-white ";
  } else {
    appearance += " bg-white hover:bg-brand hover:text-white text-brand s";
  }

  if (size === "sm") {
    appearance += "text-sm py-1 px-2 ";
  }
  if (size === "md") {
    appearance += "text-md py-2 px-4 ";
  }

  if (isFaded) {
    appearance += "opacity-60";
  }
  const link = <span className={appearance}>{children}</span>;

  if (isOutsideLink) {
    return (
      <a className="decoration-transparent" href={href}>
        {link}
      </a>
    );
  } else {
    return (
      <Link href={href} passHref>
        <a className="decoration-transparent">{link}</a>
      </Link>
    );
  }
};
