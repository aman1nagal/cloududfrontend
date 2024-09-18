import { SVGProps } from "react";

export function SortIcon({ className = "" }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
    </svg>
  );
}

export const Delete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill="#ED5757" />
    <path
      d="M55.75 29.4648C49.9225 28.8873 44.06 28.5898 38.215 28.5898C34.75 28.5898 31.285 28.7648 27.82 29.1148L24.25 29.4648"
      stroke="white"
      strokeWidth="3.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.875 27.6975L34.26 25.405C34.54 23.7425 34.75 22.5 37.7075 22.5H42.2925C45.25 22.5 45.4775 23.8125 45.74 25.4225L46.125 27.6975"
      stroke="white"
      strokeWidth="3.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M51.9875 34.9941L50.85 52.6166C50.6575 55.3641 50.5 57.4991 45.6175 57.4991H34.3825C29.5 57.4991 29.3425 55.3641 29.15 52.6166L28.0125 34.9941"
      stroke="white"
      strokeWidth="3.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37.0774 47.875H42.9049"
      stroke="white"
      strokeWidth="3.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35.625 40.875H44.375"
      stroke="white"
      strokeWidth="3.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <path
      d="M6 11V1M6 1L1 6M6 1L11 6"
      stroke="currentColor"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Close = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      d="m11.267 10.815 10.371 10.37m0-10.37-10.37 10.37"
    />
  </svg>
);
export const Action = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M10 10.833a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM10 5a.833.833 0 1 0 0-1.667A.833.833 0 0 0 10 5ZM10 16.666A.833.833 0 1 0 10 15a.833.833 0 0 0 0 1.666Z"
    />
  </svg>
);

export const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <path
      d="M6 1V11M6 11L11 6M6 11L1 6"
      stroke="currentColor"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function SortUpIcon({ className = "" }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path>
    </svg>
  );
}

export const NoData = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={188}
    height={183}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#F2F2F2"
        d="M119.351 41.156H68.693a4.366 4.366 0 0 0-3.078 1.273 4.341 4.341 0 0 0-1.277 3.069v112.274l-.58.176-12.427 3.795a2.326 2.326 0 0 1-2.9-1.537L11.466 39.798a2.31 2.31 0 0 1 .17-1.764 2.322 2.322 0 0 1 1.371-1.128l19.15-5.847 55.518-16.946 19.15-5.848a2.322 2.322 0 0 1 2.9 1.535l9.448 30.777.178.579Z"
      />
      <path
        fill="#3F3D56"
        d="M130.406 40.578 119.018 3.484A4.93 4.93 0 0 0 112.855.22L85.931 8.437 30.416 25.386 3.492 33.607A4.936 4.936 0 0 0 .58 36.005a4.913 4.913 0 0 0-.362 3.748l38.921 126.771a4.925 4.925 0 0 0 1.786 2.515 4.95 4.95 0 0 0 2.935.967c.489 0 .975-.073 1.442-.217l18.457-5.633.58-.18v-.605l-.58.177-18.628 5.688a4.367 4.367 0 0 1-3.316-.319 4.349 4.349 0 0 1-2.121-2.561L.775 39.582a4.325 4.325 0 0 1 1.391-4.62c.442-.363.95-.636 1.498-.802l26.924-8.221L86.102 8.993 113.026.772a4.367 4.367 0 0 1 3.865.663 4.346 4.346 0 0 1 1.572 2.217l11.336 36.926.18.579h.604l-.177-.58Z"
      />
      <path
        fill="#ED5757"
        d="M35.612 37.001a2.622 2.622 0 0 1-2.5-1.843l-3.739-12.179a2.598 2.598 0 0 1 .836-2.772c.265-.218.57-.381.898-.482L82.179 4.133a2.622 2.622 0 0 1 1.99.191 2.61 2.61 0 0 1 1.273 1.537l3.74 12.18c.201.66.132 1.374-.192 1.984a2.614 2.614 0 0 1-1.542 1.27L36.375 36.886a2.614 2.614 0 0 1-.763.114Z"
      />
      <path
        fill="#ED5757"
        d="M55.198 13.014c3.207 0 5.806-2.592 5.806-5.79 0-3.197-2.6-5.79-5.806-5.79s-5.805 2.593-5.805 5.79c0 3.198 2.599 5.79 5.805 5.79Z"
      />
      <path
        fill="#fff"
        d="M55.199 10.89a3.671 3.671 0 0 0 3.676-3.666A3.671 3.671 0 0 0 55.2 3.558a3.671 3.671 0 0 0-3.676 3.666 3.671 3.671 0 0 0 3.676 3.666Z"
      />
      <path
        fill="#E6E6E6"
        d="M174.937 168.526H76.82a2.476 2.476 0 0 1-1.744-.722 2.46 2.46 0 0 1-.723-1.739V48.827c0-.653.26-1.278.723-1.74a2.474 2.474 0 0 1 1.744-.72h98.117a2.463 2.463 0 0 1 2.467 2.46v117.238a2.463 2.463 0 0 1-2.467 2.461Z"
      />
      <path
        fill="#3F3D56"
        d="M129.797 40.577H68.692a4.949 4.949 0 0 0-3.488 1.444 4.921 4.921 0 0 0-1.447 3.477v118.049l.58-.176V45.498a4.341 4.341 0 0 1 1.277-3.069 4.366 4.366 0 0 1 3.078-1.273h61.285l-.18-.579Zm53.268 0H68.692a4.949 4.949 0 0 0-3.488 1.444 4.921 4.921 0 0 0-1.447 3.477V178.08a4.924 4.924 0 0 0 1.447 3.478A4.951 4.951 0 0 0 68.692 183h114.373a4.95 4.95 0 0 0 3.487-1.443 4.92 4.92 0 0 0 1.447-3.478V45.499a4.917 4.917 0 0 0-1.447-3.478 4.948 4.948 0 0 0-3.487-1.444Zm4.354 137.502a4.346 4.346 0 0 1-1.277 3.069 4.363 4.363 0 0 1-3.077 1.273H68.692a4.364 4.364 0 0 1-3.078-1.273 4.342 4.342 0 0 1-1.277-3.069V45.499a4.341 4.341 0 0 1 1.277-3.07 4.366 4.366 0 0 1 3.078-1.273h114.373a4.365 4.365 0 0 1 3.077 1.273 4.345 4.345 0 0 1 1.277 3.07v132.58Z"
      />
      <path
        fill="#ED5757"
        d="M152.586 53.314H99.173a2.62 2.62 0 0 1-1.846-.764 2.605 2.605 0 0 1-.766-1.841V37.97c0-.69.276-1.352.766-1.84a2.62 2.62 0 0 1 1.846-.765h53.413c.692.001 1.357.276 1.846.764a2.6 2.6 0 0 1 .766 1.841V50.71a2.6 2.6 0 0 1-.766 1.84 2.618 2.618 0 0 1-1.846.765Z"
      />
      <path
        fill="#ED5757"
        d="M125.879 36.235c3.206 0 5.806-2.592 5.806-5.79 0-3.197-2.6-5.789-5.806-5.789s-5.806 2.592-5.806 5.79c0 3.197 2.6 5.79 5.806 5.79Z"
      />
      <path
        fill="#fff"
        d="M125.878 33.972a3.531 3.531 0 0 0 3.536-3.527 3.531 3.531 0 0 0-3.536-3.526 3.531 3.531 0 0 0-3.536 3.526 3.531 3.531 0 0 0 3.536 3.527Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h188v183H0z" />
      </clipPath>
    </defs>
  </svg>
);

export function SortDownIcon({ className = "" }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
    </svg>
  );
}
