import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "25px",
    textTransform: "none",
  },
  outlined: {
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  outlinedPrimary: {
    color: theme.palette.primary.main,
  },
  containedPrimary: {
    color: theme.palette.white,
  },
  contained: {
    background: theme.palette.primary.main,
    "&:disabled": {
      background: theme.palette.primary.disable,
      color: theme.palette.white,
    },
  },
  label: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "28px",
    letterSpacing: "0.75px",
  },
}));

export default function CustomizedButton(props) {
  const {
    type,
    onChange,
    isLoading,
    title,
    disabled,
    icon: Icon,
    varient,
  } = props;
  const classes = useStyles();

  return (
    <Button
      onClick={onChange}
      classes={classes}
      className={classes.root}
      variant={varient ? varient : "contained"}
      color="primary"
      fullWidth
      disabled={disabled}
      type={type}
      // startIcon={Icon && <Icon />}
      {...props}
    >
      {isLoading ? <CircularProgress size={25} color="grey" /> : title}
    </Button>
  );
}
