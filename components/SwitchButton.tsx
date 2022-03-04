import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export const SwitchButton = () => (
  <form>
    <div className="flex justify-center items-center">
      <label htmlFor="s1" className="pr-2 font-extralight">
        Airplane mode
      </label>
      <SwitchPrimitive.Root
        defaultChecked
        id="s1"
        className="bg-slate-600"
        style={{
          all: "unset",
          width: 42,
          height: 15,
          backgroundColor: "black",
          borderRadius: "9999px",
          position: "relative",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <SwitchPrimitive.Thumb
          style={{
            display: "block",
            width: 21,
            height: 21,
            backgroundColor: "white",
            borderRadius: "9999px",
            boxShadow: `0 2px 2px black`,
            transition: "transform 100ms",
            transform: "translateX(2px)",
            willChange: "transform",
          }}
        />
      </SwitchPrimitive.Root>
    </div>
  </form>
);
