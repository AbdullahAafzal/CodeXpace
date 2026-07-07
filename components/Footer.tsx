import Link from "next/link";

type FooterTheme =
  | "default"
  | "loyalific"
  | "quantummind"
  | "womengem"
  | "yunuak"
  | "yunuty"
  | "ht"
  | "ftfDark"
  | "ftfLight";

type FooterProps = {
  theme?: FooterTheme;
};

const footerThemes: Record<
  FooterTheme,
  {
    footerClass: string;
    socialBgColor: string;
    socialBorderColor: string;
    topPathColor: string;
    iconColor: string;
    headingTextColor: string;
    textColor: string;
  }
> = {
  default: {
    footerClass: "bg-black border-t border-red-500/20",
    socialBgColor: "#000000",
    socialBorderColor: "rgba(220, 38, 38, 0.18)",
    topPathColor: "#dc2626",
    iconColor: "rgb(239, 68, 68)",
    headingTextColor: "#ffffff",
    textColor: "#9ca3af",
  },
  loyalific: {
    footerClass: "bg-[#020618] border-t border-[#a78bfa]/30",
    socialBgColor: "#020618",
    socialBorderColor: "rgba(167, 139, 250, 0.18)",
    topPathColor: "#a78bfa",
    iconColor: "rgb(167, 139, 250)",
    headingTextColor: "#ffffff",
    textColor: "#d1d5db",
  },
  quantummind: {
    footerClass: "bg-[#0d022c] border-t border-[#5b70f1]/25",
    socialBgColor: "#0d022c",
    socialBorderColor: "rgba(91, 112, 241, 0.2)",
    topPathColor: "#5b70f1",
    iconColor: "rgb(91, 112, 241)",
    headingTextColor: "#ffffff",
    textColor: "#d1d5db",
  },
  womengem: {
    footerClass: "bg-[#FFF9FB] border-t border-[#d81f74]/20",
    socialBgColor: "#FFF9FB",
    socialBorderColor: "rgba(216, 31, 116, 0.2)",
    topPathColor: "#d81f74",
    iconColor: "rgb(216, 31, 116)",
    headingTextColor: "#111827",
    textColor: "#475569",
  },
  yunuak: {
    footerClass: "bg-[#0e1e2b] border-t border-[#0eb5fc]/30",
    socialBgColor: "#0e1e2b",
    socialBorderColor: "rgba(14, 181, 252, 0.2)",
    topPathColor: "#0eb5fc",
    iconColor: "rgb(14, 181, 252)",
    headingTextColor: "#ffffff",
    textColor: "#d1d5db",
  },
  yunuty: {
    footerClass: "bg-[#00031C] border-t border-[#8C5FFF]/30",
    socialBgColor: "#00031C",
    socialBorderColor: "rgba(140, 95, 255, 0.2)",
    topPathColor: "#8C5FFF",
    iconColor: "rgb(140, 95, 255)",
    headingTextColor: "#ffffff",
    textColor: "#d1d5db",
  },
  ht: {
    footerClass: "bg-white border-t border-[#2e8d39]/30",
    socialBgColor: "#ffffff",
    socialBorderColor: "rgba(46, 141, 57, 0.18)",
    topPathColor: "#2e8d39",
    iconColor: "rgb(46, 141, 57)",
    headingTextColor: "#0f172a",
    textColor: "#475569",
  },
  ftfDark: {
    footerClass: "bg-[#020617] border-t border-white/10",
    socialBgColor: "#020617",
    socialBorderColor: "rgba(255, 255, 255, 0.15)",
    topPathColor: "#ffffff",
    iconColor: "rgb(255, 255, 255)",
    headingTextColor: "#ffffff",
    textColor: "#d1d5db",
  },
  ftfLight: {
    footerClass: "bg-white border-t border-[#000000]/10",
    socialBgColor: "#ffffff",
    socialBorderColor: "rgba(0, 0, 0, 0.1)",
    topPathColor: "#000000",
    iconColor: "rgb(0, 0, 0)",
    headingTextColor: "#0f172a",
    textColor: "#475569",
  },
};

export default function Footer({ theme = "default" }: FooterProps) {
  const themeConfig = footerThemes[theme] || footerThemes.default;

  return (
    <footer
      className={`py-8 relative overflow-hidden ${themeConfig.footerClass}`}
      style={{ color: themeConfig.textColor }}
    >
      {/* Decorative dashed lines */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] opacity-25">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M 0 50 Q 200 250, 400 50"
            stroke={themeConfig.topPathColor}
            strokeWidth="2"
            fill="none"
            strokeDasharray="12,12"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex gap-2 items-center mb-4">
              <h3
                className="font-semibold text-lg"
                style={{ color: themeConfig.headingTextColor }}
              >
                US
              </h3>
              <img
                src="/flag-logo3.webp"
                alt="flag-logo3"
                className="h-[20px] w-[30px]"
              />
            </div>

            <div className="space-y-3">
              <div className="flex flex-col items-start ">
                <p
                  className="flex gap-2 text-sm mb-1"
                  style={{ color: themeConfig.textColor }}
                >
                  <svg
                    className="w-4 h-4 mt-1 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>{" "}
                  117 S LEXINGTON Harrisonville, MO US
                </p>
                <p className="flex gap-2  text-sm py-2">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>{" "}
                  +61469021387
                </p>
                <p className="flex gap-2  text-sm">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>{" "}
                  hr@codexpace.com
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 items-center mb-4">
              <h3
                className="font-semibold text-lg"
                style={{ color: themeConfig.headingTextColor }}
              >
                Saudi Arabia
              </h3>
              <img
                src="/flag-logo2.png"
                alt="flag-logo2.png"
                className="h-[20px] w-[30px]"
              />
            </div>

            <div className="space-y-3">
              <div className="flex flex-col items-start ">
                <p className="flex gap-2  text-sm mb-1">
                  <svg
                    className="w-4 h-4 mt-1 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>{" "}
                  RCTA 9059, Al Wizarat, Riyadh, Saudi Arabia
                </p>
                <p className="flex gap-2  text-sm py-2">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>{" "}
                  +61469021387
                </p>
                <p className="flex gap-2  text-sm">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>{" "}
                  hr@codexpace.com
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 items-center mb-4">
              <h3
                className="font-semibold text-lg"
                style={{ color: themeConfig.headingTextColor }}
              >
                Pakistan
              </h3>
              <img
                src="/flag-logo1.webp"
                alt="flag-logo1"
                className="h-[20px] w-[30px]"
              />
            </div>

            <div className="space-y-3">
              <div className="flex flex-col items-start ">
                <p className="flex gap-2  text-sm mb-1">
                  <svg
                    className="w-4 h-4 mt-1 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>{" "}
                  746 G4 Johar Town Lahore. Pakistan
                </p>
                <p className="flex gap-2  text-sm py-2">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>{" "}
                  +923316663335
                </p>
                <p className="flex gap-2  text-sm">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>{" "}
                  hr@codexpace.com
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 items-center mb-4">
              <h3
                className="font-semibold text-lg"
                style={{ color: themeConfig.headingTextColor }}
              >
                UK
              </h3>
              <img
                src="/flag-logo4.webp"
                alt="flag-logo4"
                className="h-[20px] w-[30px]"
              />
            </div>

            <div className="space-y-3">
              <div className="flex flex-col items-start ">
                <p className="flex gap-2  text-sm mb-1">
                  <svg
                    className="w-4 h-4 mt-1 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>{" "}
                  Mill St E, Dewsbury, WF12 9AQ, England, GB UK
                </p>
                <p className="flex gap-2  text-sm py-2">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>{" "}
                  +61469021387
                </p>
                <p className="flex gap-2  text-sm">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    color={themeConfig.iconColor}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>{" "}
                  hr@codexpace.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-red-500/20">
          <p
            className="text-sm mb-4 md:mb-0"
            style={{ color: themeConfig.textColor }}
          >
            Copyright © 2024 CodeXpace. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/share/1HDKEeNsrB/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: themeConfig.socialBgColor,
                borderColor: themeConfig.socialBorderColor,
              }}
            >
              <svg
                className="w-4 h-4"
                fill="#1877F2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/codexpaceofficial?igsh=cHd5bHhjODI4NjE5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: themeConfig.socialBgColor,
                borderColor: themeConfig.socialBorderColor,
              }}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="instagram-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#833AB4" />
                    <stop offset="50%" stopColor="#FD1D1D" />
                    <stop offset="100%" stopColor="#FCAF45" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#instagram-gradient)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/codexpaceofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: themeConfig.socialBgColor,
                borderColor: themeConfig.socialBorderColor,
              }}
            >
              <svg
                className="w-4 h-4"
                fill="#0077B5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@lifeatcodexpace"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: themeConfig.socialBgColor,
                borderColor: themeConfig.socialBorderColor,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="#FFFFFF"
                viewBox="0 0 640 640"
              >
                <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@codexpacehub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: themeConfig.socialBgColor,
                borderColor: themeConfig.socialBorderColor,
              }}
            >
              <svg className="w-5 h-5" fill="#FF0000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
              </svg>
            </a>
            {/* <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: themeConfig.socialBgColor, borderColor: themeConfig.socialBorderColor }}>
              <span className="text-white text-xs">t</span>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
