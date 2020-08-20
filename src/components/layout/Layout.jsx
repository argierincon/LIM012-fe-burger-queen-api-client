import React from 'react';
import './Layout.sass';

/* Componente stateless: (Componente funcional) No depende de tener un estado ni un ciclo de vida, solo presenta la lógica. Son un poco más utilizados hoy día porque trabajan con la parte funcional, es decir, son funciones y nos permiten enfocarnos unicamente en lo que necesitamos.*/

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <svg
        class="layout__top-shape"
        viewBox="0 0 643 763"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="-1"
          width="643"
          height="764"
        >
          <rect y="-1" width="643" height="764" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M75.4187 161.668C49.269 105.418 100.561 -1 100.561 -1H643.648V621.164C643.648 621.164 474.964 763.182 383.838 718.429C282.601 668.71 360.371 475.265 367.076 418.248C373.781 361.23 383.697 308.289 340.257 260.611C311.243 228.765 232.981 227.071 232.981 227.071C232.981 227.071 104.07 223.3 75.4187 161.668Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M168.285 42.6018C208.514 15.77 273.885 -1 273.885 -1H646V637.934C646 637.934 570.571 757 490.114 757C423.767 757 399.6 659.734 379.486 523.898C359.371 388.062 299.028 337.752 290.647 331.044C282.266 324.336 235.117 300.487 185.047 295.827C112.971 289.119 66.0373 290.994 35.8659 272.35C-54.6484 216.417 128.057 69.4335 168.285 42.6018Z"
            fill="url(#paint1_linear)"
            fill-opacity="0.8"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="355.819"
            y1="-1"
            x2="355.819"
            y2="727.152"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFC54D" stop-opacity="0.7" />
            <stop offset="1" stop-color="#FF7512" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="328.5"
            y1="-1"
            x2="328.5"
            y2="757"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFAE07" stop-opacity="0.7" />
            <stop offset="0.755208" stop-color="#FF5D00" stop-opacity="0.75" />
          </linearGradient>
        </defs>
      </svg>
      {children}
    </section>
  );
};

export default Layout;
