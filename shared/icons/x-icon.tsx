import React from "react";

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path d="M12 4L4 12M4 4L12 12" stroke-linecap="round" stroke="#8E9094" />
    </svg>
  );
};
