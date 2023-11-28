import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: {
        main: "#0f172a";
        black1: "#c4c4c4";
        black2: "#b2b2b2";
        black3: "#a0a0a0";
        black4: "#8e8e8e";
        black5: "#7c7c7c";
        black6: "#6b6b6b";
        black7: "#595959";
        black8: "#474747";
        black9: "#353535";
        black10: "#232323";
      };
      white: {
        main: "#ffffff";
        white1: "#c4c4c4";
        white2: "#b2b2b2";
        white3: "#a0a0a0";
        white4: "#8e8e8e";
        white5: "#7c7c7c";
        white6: "#6b6b6b";
        white7: "#595959";
        white8: "#474747";
        white9: "#353535";
        white10: "#232323";
      };
      red: {
        main: "#c00000";
        red1: "#ff8989";
        red2: "#f66";
        red3: "#ff4242";
        red4: "#ff1e1e";
        red5: "#f90000";
        red6: "#d60000";
        red7: "#b20000";
        red8: "#8e0000";
        red9: "#6b0000";
        red10: "#470000";
      };
      orange: {
        main: "#faae20";
        orange1: "#fcd58c";
        orange2: "#fbc869";
        orange3: "#fabb46";
        orange4: "#faaf23";
        orange5: "#f4a105";
        orange6: "#d18a04";
        orange7: "#ae7303";
        orange8: "#8b5c03";
        orange9: "#684502";
        orange10: "#452e01";
      };
      yellow: {
        main: "#ffd500";
        yellow1: "#ffec98";
        yellow2: "#ffe666";
        yellow3: "#ffe042";
        yellow4: "#ffda1e";
        yellow5: "#f9d100";
        yellow6: "#d6b300";
        yellow7: "#b29500";
        yellow8: "#8e7700";
        yellow9: "#6b5900";
        yellow10: "#47b000";
      };
    };
    fonts: {
      poppins: `'Poppins', sans-serif`;
    };
    paddings: {
      container: "15px";
      pageTop: "30px";
    };
    margins: {
      pageTop: "30px";
    };
  }
}
