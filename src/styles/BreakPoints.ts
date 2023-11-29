interface Size {
  xsMin: string;
  xsMax: string;
  smMin: string;
  smMax: string;
  mdMin: string;
  mdMax: string;
  lgMin: string;
  lgMax: string;
  xlMin: string;
  xlMax: string;
  xxlMin: string;
}

const size: Size = {
  xsMin: "1px",
  xsMax: "575px", // for small screen mobile
  smMin: "576px", // for mobile screen
  smMax: "767px", // for mobile screen
  mdMin: "768px", // for tablets
  mdMax: "991px", // for tablets
  lgMin: "992px", // for laptops
  lgMax: "1992px", // for laptops
  xlMin: "1200px", // for desktop / monitors
  xlMax: "1399px", // for desktop / monitors
  xxlMin: "2000px", // for big screens
};

export const device = {
  xs: `(min-width: ${size.xsMin}) and (max-width: ${size.xsMax})`,
  sm: `(min-width: ${size.smMin}) and (max-width: ${size.smMax})`,
  md: `(min-width: ${size.mdMin}) and (max-width: ${size.mdMax})`,
  lg: `(min-width: ${size.lgMin}) and (max-width: ${size.lgMax})`,
  xl: `(min-width: ${size.xlMin}) and (max-width: ${size.xlMax})`,
  xxl: `(max-width: ${size.xxlMin})`,
};
