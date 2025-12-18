import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    color: {
      black: string;
      grey: string;
    };
    tabPanel: {
      backGround: {
        default: string;
        active: string;
      };
      text: {
        default: string;
        active: string;
      };
    };
  }
  interface PaletteOptions {
    color?: {
      black?: string;
      grey?: string;
    };
    tabPanel?: {
      backGround?: {
        default?: string;
        active?: string;
      };
      text?: {
        default?: string;
        active?: string;
      };
    };
  }
  interface TypographyVariants {
    weight: {
      bold: number;
      standard: number;
    };
    font1: React.CSSProperties;
    font2: React.CSSProperties;
    font3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    weight?: {
      bold?: number;
      standard?: number;
    };
    font1?: React.CSSProperties;
    font2?: React.CSSProperties;
    font3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    font1: true;
    font2: true;
    font3: true;
  }
}
