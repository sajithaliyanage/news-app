import "@mui/material/styles/createPalette";

export type Mode = {
    mode: string;
}

export type Theme = {
    palette: Mode;
}

declare module "@mui/material/styles/createPalette" {
    export interface PaletteOptions {
        mode: string;
    }
}
