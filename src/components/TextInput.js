import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function GravityTextField(props) {
  const { error, isGroup, icon } = props;
  const useStylesGravity = makeStyles((theme) => ({
    label: {
      color: "#A0A3BD",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.75px",
      fontStyle: "Book",
    },
    root: {
      padding: isGroup ? "0px" : "0px 10px",
      margin: "0px 0px 10px 0px",
      "& textarea": {
        padding: "10px",
        height: "80px !important",
      },
    },
    focused: {},
  }));

  const classes = useStylesGravity();

  const inputProp = {
    ...props.InputProps,
    classes,
    disableUnderline: true,
  };

  return (
    <TextField
      {...props}
      InputProps={inputProp}
      fullWidth
      autoComplete="no"
      variant="outlined"
    />
  );
}

export default function CustomizedInputs(props) {
  return (
    <GravityTextField
      {...props}
      variant="filled"
      autoComplete="off"
      fullWidth
    />
  );
}
