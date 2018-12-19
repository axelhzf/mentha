import React from 'react';

export function RectangleIcon(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="6" width="28" height="20" stroke="currentColor" />
    </svg>
  );
}
