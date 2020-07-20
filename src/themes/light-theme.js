import { createMuiTheme } from "@material-ui/core/styles";

export const overridings = {
    name: 'Light Theme',
    palette:{
        common:{
            black:"#000",
            white:"#fff"
        },
        background:{
            paper:"#fff",
            default:"#fff"
        },
        primary:{
            light:"#bbdbb4",
            main:"#56ab8d",
            dark:"#0d5c63",
            contrastText:"#fff"
        },
        secondary:{
            light:"#fed7dd",
            main:"#e598ab",
            dark:"#861657",
            contrastText:"#fff"
        },
        error:{
            light:"#ff5e7d",
            main:"#d0021b",
            dark:"#b8002d",
            contrastText:"#fff"
        },
        text:{
            primary:"rgba(0, 0, 0, 0.87)",
            secondary:"rgba(0, 0, 0, 0.54)",
            disabled:"rgba(0, 0, 0, 0.38)",
            hint:"rgba(0, 0, 0, 0.38)"
        }
    }
};

export default createMuiTheme(overridings);