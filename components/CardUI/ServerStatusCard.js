"use client";

import React, { useState } from "react";

const ServerStatusCard = () => {
  const [showStatus, setShowStatus] = useState(false);
  const [showLogs, setShowLogs] = useState(false);

  return (
    <div className="bg-themeCardBGBlue">
      <div className="h-[58px] bg-white flex justify-center items-center">
        <h3 className="text-sm font-semibold">Server Status</h3>
      </div>
      <div className="container">
        <div className="rounded-[15px] mt-12 bg-themeBGLightBlue px-5 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                >
                  <path
                    d="M14.2078 28.4157C13.2461 28.4159 12.2868 28.3192 11.3445 28.1271C9.52711 27.7549 7.8008 27.0285 6.26408 25.9893C3.97979 24.4472 2.19171 22.2758 1.11649 19.7381C0.753194 18.8786 0.475896 17.9853 0.288654 17.0711C-0.0962179 15.1816 -0.0962179 13.2339 0.288654 11.3444C0.660832 9.52704 1.38721 7.80077 2.42635 6.26408C3.96841 3.97979 6.13982 2.19171 8.67749 1.11649C9.53699 0.753195 10.4304 0.475898 11.3445 0.288654C13.234 -0.0962179 15.1817 -0.0962179 17.0712 0.288654C18.8886 0.660859 20.6149 1.38728 22.1516 2.42647C24.4359 3.96849 26.224 6.13986 27.2992 8.67749C27.6625 9.53699 27.9398 10.4304 28.1271 11.3445C28.5119 13.234 28.5119 15.1817 28.1271 17.0712C27.7549 18.8886 27.0284 20.6149 25.9893 22.1516C24.4472 24.4359 22.2758 26.224 19.7381 27.2992C18.8786 27.6625 17.9853 27.9398 17.0711 28.1271C16.1288 28.3192 15.1695 28.4159 14.2078 28.4157ZM7.5332 17.0224V20.598C7.53197 20.7545 7.56467 20.9094 7.62902 21.0521C7.68864 21.1822 7.77478 21.2985 7.88191 21.3934C8.09543 21.5801 8.36943 21.6829 8.65304 21.6829C8.84408 21.6847 9.03219 21.6358 9.19809 21.5411C9.36399 21.4463 9.50173 21.3092 9.59719 21.1437L11.0837 18.6513C11.1052 18.6154 11.1246 18.5783 11.1419 18.5401L12.0091 17.0223H15.3118C15.8826 17.0221 16.4527 16.9849 17.0187 16.911C17.523 16.8446 18.0212 16.7389 18.5091 16.595C18.9165 16.4793 19.3118 16.3246 19.6896 16.1331C20.0654 15.9425 20.4218 15.7157 20.7537 15.4561C21.037 15.2287 21.2941 14.9706 21.5205 14.6866C21.7303 14.4226 21.9094 14.1355 22.0544 13.831C22.1985 13.5281 22.3072 13.2096 22.3784 12.8819C22.4483 12.5594 22.4835 12.2303 22.4832 11.9003C22.4893 11.2549 22.3625 10.615 22.1107 10.0207C21.8803 9.48722 21.5473 9.00432 21.1305 8.59948C21.0974 8.56724 21.0529 8.5493 21.0066 8.54953C20.9808 8.54955 20.9553 8.55498 20.9318 8.56547C20.9082 8.57596 20.8871 8.59128 20.8698 8.61043L15.7352 14.3098C15.6226 14.4348 15.4941 14.5444 15.3529 14.6358C15.1963 14.7482 15.0227 14.8347 14.8386 14.892C14.4698 15.007 14.0748 15.007 13.706 14.892C13.5189 14.8335 13.3426 14.745 13.1839 14.6299L11.2091 13.1948C11.1718 13.1678 11.1258 13.1555 11.08 13.1602C11.0342 13.1649 10.9917 13.1863 10.9606 13.2203L7.53424 17.0152C7.53354 17.016 7.53317 17.017 7.5332 17.018C7.53319 17.0191 7.5336 17.0201 7.53433 17.0209C7.53507 17.0217 7.53607 17.0222 7.53716 17.0223L7.5332 17.0224ZM9.85276 6.73272C9.85262 6.73275 9.85248 6.73282 9.85238 6.73292C9.85227 6.73302 9.8522 6.73316 9.85218 6.73331C9.85216 6.73345 9.85209 6.73359 9.85198 6.73369C9.85188 6.7338 9.85175 6.73386 9.8516 6.73389C9.54221 6.74153 9.23618 6.79998 8.94576 6.90691C8.80954 6.95742 8.67781 7.01931 8.55198 7.09192C8.43089 7.1618 8.31623 7.24226 8.20932 7.33235C8.10633 7.41899 8.01182 7.51525 7.92709 7.61982C7.84493 7.72176 7.77363 7.832 7.71437 7.94874C7.65583 8.0642 7.61068 8.18596 7.57977 8.31166C7.54877 8.43869 7.53313 8.56898 7.5332 8.69973C7.5332 8.73583 7.53436 8.77122 7.53657 8.80452C7.53663 8.80528 7.53651 8.80604 7.53623 8.80675C7.53595 8.80745 7.53551 8.80809 7.53494 8.8086C7.53391 8.80961 7.53333 8.81099 7.53331 8.81244V11.4015C7.53418 11.4386 7.54618 11.4746 7.56774 11.5048C7.5893 11.535 7.61944 11.5581 7.65424 11.5709C7.68905 11.5838 7.72692 11.5859 7.76295 11.577C7.79897 11.5681 7.83149 11.5486 7.8563 11.521L9.29261 9.92949C9.32459 9.88245 9.35894 9.83706 9.39553 9.7935L9.40718 9.78034C9.49344 9.67812 9.59132 9.5863 9.69884 9.50673C9.80445 9.42843 9.91839 9.36205 10.0386 9.30879C10.1582 9.25589 10.2831 9.21569 10.4112 9.18887C10.5393 9.16209 10.6699 9.14855 10.8008 9.14846H10.8049C11.137 9.14817 11.4631 9.23695 11.7492 9.40555C11.8192 9.44625 11.8864 9.4916 11.9503 9.54131L11.9619 9.55039L13.8976 10.9563C13.935 10.9833 13.981 10.9956 14.0268 10.9909C14.0726 10.9862 14.1151 10.9647 14.1462 10.9307L17.5145 7.19205C17.536 7.16862 17.5507 7.13979 17.5571 7.10864C17.5634 7.07749 17.5612 7.04519 17.5506 7.01521C17.5401 6.98522 17.5215 6.95868 17.497 6.93841C17.4725 6.91814 17.443 6.90492 17.4116 6.90015C17.1305 6.85288 16.8451 6.81597 16.5632 6.79047C16.1522 6.7524 15.7185 6.73319 15.274 6.73319L9.85276 6.73272Z"
                    fill="#8338EC"
                  />
                </svg>
              </div>
              <div className="text-sm font-semibold">User App</div>
            </div>
            <div onClick={() => setShowStatus(!showStatus)}>
                <div className={showStatus ? "rotate-180 transition-all" : "transition-all rotate-0"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="13"
                    viewBox="0 0 21 13"
                    fill="none"
                  >
                    <path
                      d="M2 10.5547C2 10.5547 7.0638 2.00098 10.5537 2.00098C14.0424 2.00098 19.1074 10.5547 19.1074 10.5547"
                      stroke="#130F26"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
            </div>
          </div>
          <div className="mt-3 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="298"
              height="2"
              viewBox="0 0 298 2"
              fill="none"
            >
              <path d="M0 1H238.883H298" stroke="#B9B9B9" />
            </svg>
          </div>

          {showStatus && (
            <section>
              <div className="bg-white rounded-lg px-5 py-3">
                <div className="font-semibold text-sm flex justify-between items-center">
                  <div>Status</div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <circle
                        cx="7.38998"
                        cy="7.38998"
                        r="7.38998"
                        fill="#46CE5C"
                      />
                    </svg>
                    <span>Active</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[9px] font-semibold mt-2">
                  <div>Uptime</div>
                  <div>2023-08-25 08:43 Pm</div>
                </div>
                <div className="flex justify-end items-center mt-2">
                  <div onClick={() => location.reload()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                    >
                      <path
                        d="M7.1476 0.685717C6.97403 0.51215 6.69263 0.51215 6.51906 0.685717C6.34549 0.859283 6.34549 1.14069 6.51906 1.31426L7.09368 1.88888L5.90146 1.88887C4.7548 1.88872 4.06906 1.88863 3.49927 2.07377C2.34917 2.44746 1.44747 3.34916 1.07378 4.49926C0.888646 5.06905 0.888733 5.75479 0.888878 6.90145V7.09852C0.888733 8.24518 0.888646 8.93092 1.07378 9.50072C1.14964 9.73416 1.40037 9.86192 1.63382 9.78607C1.86726 9.71022 1.99502 9.45948 1.91917 9.22603C1.78326 8.80775 1.77778 8.27543 1.77778 6.99999C1.77778 5.72454 1.78326 5.19222 1.91917 4.77394C2.20493 3.89445 2.89446 3.20492 3.77395 2.91916C4.19223 2.78325 4.72455 2.77776 6 2.77776H6.93909L6.38214 3.24189C6.19357 3.39903 6.16809 3.67928 6.32523 3.86785C6.48237 4.05641 6.76262 4.08189 6.95119 3.92475L7.89037 3.1421C8.13436 2.93878 8.26814 2.65366 8.28766 2.36311C8.30825 2.05664 8.20192 1.74004 7.96473 1.50285L7.1476 0.685717Z"
                        fill="#716480"
                      />
                      <path
                        d="M11.5945 4.20115C11.5215 3.96679 11.2724 3.83599 11.038 3.90898C10.8037 3.98198 10.6729 4.23114 10.7458 4.46549C10.8838 4.9084 10.8889 5.47095 10.8889 6.79867C10.8889 8.12638 10.8838 8.68893 10.7458 9.13184C10.4567 10.0602 9.76207 10.7791 8.88739 11.0755C8.47213 11.2163 7.9434 11.2222 6.66666 11.2222H5.73965L6.31427 10.6476C6.48783 10.474 6.48783 10.1926 6.31427 10.019C6.1407 9.84548 5.85929 9.84548 5.68573 10.0191L4.8686 10.8362C4.6314 11.0734 4.52508 11.39 4.54567 11.6964C4.56518 11.987 4.69897 12.2721 4.94296 12.4754L5.88214 13.2581C6.07071 13.4152 6.35096 13.3897 6.5081 13.2012C6.66524 13.0126 6.63976 12.7324 6.45119 12.5752L5.89424 12.1111L6.76782 12.1111C7.91185 12.1113 8.60043 12.1114 9.17272 11.9174C10.3276 11.526 11.2242 10.585 11.5945 9.39619C11.778 8.80719 11.7779 8.09748 11.7778 6.89544V6.70189C11.7779 5.49985 11.778 4.79014 11.5945 4.20115Z"
                        fill="#716480"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-3 justify-between gap-2">
                <button className="block py-1.5 font-bold text-white text-[11px] bg-[#8338EC82] rounded-[6px] active w-full">
                  Check Status
                </button>
                <button className="block py-1.5 font-bold text-white text-[11px] bg-[#00D685] rounded-[6px] active w-full">
                  Restart
                </button>
                <button
                  onClick={() => setShowLogs(!showLogs)}
                  className="block py-1.5 font-bold text-white text-[11px] bg-[#FF980B] rounded-[6px] active w-full"
                >
                  View logs
                </button>
              </div>
              {showLogs && (
                <div>
                  <div className="font-semibold text-sm my-3">Logs:</div>
                  <div className="bg-black text-white text-[4px] p-3 rounded-xl leading-4">
                    err: 2023-08-27T05:37:44.254Z routes
                    2023-08-27T05:37:44.254Z [GET] /v3/h/p/userinfo 2|dailypoll
                    | stderr: 2023-08-27T05:37:44.274Z routes
                    2023-08-27T05:37:44.274Z [GET] /v3/h/p/userinfo 2|dailypoll
                    | stderr: 2023-08-27T05:37:44.374Z routes
                    2023-08-27T05:37:44.374Z [POST] /v3/h/p/submit 2|dailypoll |
                    stdout: true 2|dailypoll | stderr: 2023-08-27T05:37:44.594Z
                    routes 2023-08-27T05:37:44.594Z [GET] /v3/h/p/userinfo
                    2|dailypoll | stderr: 2023-08-27T05:37:44.605Z routes
                    2023-08-27T05:37:44.605Z [GET] /v3/h/p/poll-result/1277
                    2|dailypoll | stderr: 2023-08-27T05:37:44.691Z routes
                    2023-08-27T05:37:44.691Z [POST]
                    /v3/profilesurvey/userProfile 2|dailypoll | stderr:
                    2023-08-27T05:37:44.784Z routes 2023-08-27T05:37:44.784Z
                    [POST] /v3/h/p/submit 2|dailypoll | stderr:
                    2023-08-27T05:37:44.880Z routes 2023-08-27T05:37:44.880Z
                    [GET] /v3/h/p/userinfo 2|dailypoll | stderr:
                    2023-08-27T05:37:44.907Z routes 2023-08-27T05:37:44.907Z
                    [GET] /v3/h/p/popular 2|dailypoll | stderr:
                    2023-08-27T05:37:45.067Z routes
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServerStatusCard;
