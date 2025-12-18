import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
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
}
