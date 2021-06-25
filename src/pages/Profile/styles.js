import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  container: {
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  mobilePreview: {
    display: "flex",
    marginTop: "20px",
    "&:after": {
      content: "",
      backgroundImage: "url(/mockup.png)",
      backgroundPosition: "50%",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: "none",
    },
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  logo: {
    width: "60px",
  },
}));

export default useStyles;
