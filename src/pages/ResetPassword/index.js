import React, { useEffect } from "react";
import { Formik } from "formik";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { Form } from "./components/Form";
import * as Yup from "yup";
import logo from "../../assests/logo.png";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import useResetPassword from "../../hooks/auth/useResetPassword";

const validationSchema = Yup.object({
  password: Yup.string("")
    .min(4, "Password must contain atleast 4 characters")
    .required("入力してください。"),
  password_confirmation: Yup.string("")
    .min(4, "Password must contain atleast 4 characters")
    .required("入力してください。"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("入力してください。"),
});

const ResetPassword = () => {
  const classes = useStyles();
  const values = { email: "", password: "", password_confirmation: "" };
  const { mutate: resetPassword } = useResetPassword();
  let { token } = useParams();

  const submit = (data) => {
    resetPassword({ ...data, token });
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Box my={0} mx={"auto"} display="flex" justifyContent="center">
            <Link to="/">
              <img src={logo} alt="" className={classes.logo} />
            </Link>  
          </Box>
          <Formik
            render={(props) => <Form isLoading={false} {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={submit}
          />
        </div>
        <Typography align="center" variant="subtitle2" gutterBottom>
         {" "}
          <Typography variant="subtitle2" color="primary">
            <Link to={"/signup"} variant="subtitle2" className={classes.link}>
            すでに登録済みの方はこちら
            </Link>
          </Typography>
        </Typography>
      </div>
    </>
  );
};

export default ResetPassword;
