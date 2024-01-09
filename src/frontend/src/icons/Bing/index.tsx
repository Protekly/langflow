import React, { forwardRef } from "react";
import SvgBing from "./Bing";

export const BingIcon = forwardRef<SVGSVGElement, React.PropsWithChildren<{}>>(
  (props, ref) => {
    return <SvgBing ref={ref} {...props} />;
  }
);
