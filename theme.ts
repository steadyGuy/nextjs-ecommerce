declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      secondaryLight: string;
      secondarySuperLight: string;
      text: string;
      background: string;
      positive: string;
      negative: string;
    },
    typography: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      p: number;
    },
    indent: {
      product: number;
      section: number; // 64
      h2Title: number; // 58
    }
  }
}

export { };
