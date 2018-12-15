import React from 'react';

type Props = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export function Rect(props: Props) {
  const filterName = `filter${props.id}_d`;
  return (
    <>
      <g filter={`url(#${filterName})`}>
        <rect
          x={props.x}
          y={props.y}
          width={props.width}
          height={props.height}
          rx="3"
          ry="3"
          fill="#FFFFFF"
        />
      </g>
      <defs>
        <filter
          id={filterName}
          x={props.x}
          y={props.y}
          width={props.width + 6}
          height={props.height + 6}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </>
  );
}
