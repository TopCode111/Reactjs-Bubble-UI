import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { useHistory, Redirect } from "react-router";
import { Form } from "./components/Form";
import * as Yup from "yup";
import logo from "../../assests/logo.png";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import useRegistration from "../../hooks/auth/useRegistration";
import LocalStorageService from "../../utils/localStorageService";
const localStorageService = LocalStorageService.getService();

const validationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("正しく入力されているか確認してください。")
    .required("入力してください。"),
  password: Yup.string("")
    .min(4, "Password must contain atleast 4 characters")
    .required("入力してください。"),
  user_name: Yup.string("Enter User Name").required("User name is required"),
  password_confirmation: Yup.string("")
    .min(4, "Password must contain atleast 4 characters")
    .required("入力してください。"),
});

const Registration = () => {
  const history = useHistory();

  const { mutate: runSignup } = useRegistration();
  const submit = (data) => {
    runSignup(data);
  };

  const classes = useStyles();
  const values = {
    user_name: "",
    password: "",
    password_confirmation: "",
    email: "",
  };

  const token = localStorageService.getAccessToken();
  return (
    <>
      {token ? (
        <Redirect to="/" />
      ) : (
        <div className={classes.root}>
          <div className={classes.container}>
            <Box my={3} mx={"auto"} display="flex" justifyContent="center">
              <Link to="/">
                <img src={logo} alt="" className={classes.logo} />
              </Link>
            </Box>
            <Formik
              render={(props) => <Form {...props} isLoading={false} />}
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={submit}
            />
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="Column"
              textAlign="center"
              my={3}
            >
              <Typography align="center" variant="subtitle2" gutterBottom>
                {" "}
              </Typography>
              <Typography variant="subtitle2" color="primary">
                <Link
                  to={"/login"}
                  variant="subtitle2"
                  className={classes.link}
                >
                  すでに登録済みの方はこちら
                </Link>
              </Typography>
            </Box>
          </div>
        </div>
      )}
    </>
  );
};

export default Registration;
