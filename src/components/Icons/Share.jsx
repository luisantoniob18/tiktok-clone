import * as React from "react"

export function Share (props) {
    return (
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#b)" filter="url(#a)">
      <path
        fill="#fff"
        fillOpacity={0.9}
        fillRule="evenodd"
        d="M25.56 4.07a1.98 1.98 0 0 0-2.15-.42 1.95 1.95 0 0 0-1.21 1.8v8.34c-5.4.35-10.04 2.2-13.43 5.68C4.97 23.35 3 29.03 3 36.19c0 .79.48 1.5 1.22 1.8.73.3 1.58.13 2.14-.42 3.34-3.31 7.65-4.56 11.25-4.95 1.8-.2 3.37-.18 4.5-.1h.09v9.03c0 .78.46 1.48 1.18 1.79.72.3 1.56.16 2.13-.37l18.87-17.49a1.94 1.94 0 0 0 .04-2.8L25.56 4.07Z"
        clipRule="evenodd"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
      <filter
        id="a"
        width={51}
        height={49}
        x={-1.5}
        y={0.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.5} />
        <feGaussianBlur stdDeviation={2.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_81245_5665"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.5} />
        <feGaussianBlur stdDeviation={0.75} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend
          in2="effect1_dropShadow_81245_5665"
          result="effect2_dropShadow_81245_5665"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_81245_5665"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
    )
}
