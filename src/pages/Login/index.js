import React, { useEffect } from "react";
import { Formik } from "formik";
import Typography from "@material-ui/core/Typography";
import { Redirect, useHistory } from "react-router-dom";
import { Form } from "./components/Form";
import * as Yup from "yup";
import logo from "../../assests/logo.png";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import useLogin from "../../hooks/auth/useLogin";
import LocalStorageService from "../../utils/localStorageService";
const localStorageService = LocalStorageService.getService();

const validationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("正しく入力されているか確認してください。")
    .required("入力してください。"),
  password: Yup.string("")
    .min(4, "Password must contain atleast 4 characters")
    .required("入力してください。"),
});

const Login = () => {
  let history = useHistory();
  const { mutate: runLogin } = useLogin();

  const submit = (data) => {
    runLogin(data);
  };
  const classes = useStyles();
  const values = { email: "", password: "" };

  const token = localStorageService.getAccessToken();

  return (
    <>
      {token ? (
        <Redirect to="/" />
      ) : (
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
            <Typography align="right" color="primary" variant="h5">
              <Link
                to={"/forgetpassword"}
                variant="subtitle2"
                className={classes.link}
              >
                パスワードを忘れた方はこちら
              </Link>
            </Typography>
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

export default Login;
