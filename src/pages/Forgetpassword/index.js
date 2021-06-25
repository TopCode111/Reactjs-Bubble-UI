import React, { useEffect } from "react";
import { Formik } from "formik";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
import { Form } from "./components/Form";
import * as Yup from "yup";
import logo from "../../assests/logo.png";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import useForgetPassword from "../../hooks/auth/useForgetPassword";
import LocalStorageService from "../../utils/localStorageService";
const localStorageService = LocalStorageService.getService();

const validationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("正しく入力されているか確認してください。")
    .required("入力してください。"),
});

const ForgetPassword = () => {
  const classes = useStyles();
  const values = { email: "" };
  const { mutate: forgetpassword } = useForgetPassword();

  const submit = (data) => {
    forgetpassword(data);
  };

  const token = localStorageService.getAccessToken();

  return (
    <>
      {token ? (
        <Redirect to="/" />
      ) : (
        <div className={classes.root}>
          <div className={classes.container}>
            <Box my={0} mx={"auto"} display="flex" justifyContent="center">
              <img src={logo} alt="" className={classes.logo} />
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
              新規会員登録はこちら
              </Link>
            </Typography>
          </Typography>
        </div>
      )}
    </>
  );
};

export default ForgetPassword;
