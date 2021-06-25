import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router";
import { Form } from "./components/Form";
import * as Yup from "yup";
import useStyles from "./styles";

const validationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password1: Yup.string("")
    .min(4, "Password must contain atleast 4 characters")
    .required("Enter your password"),
  first_name: Yup.string("Enter you first name").required(
    "First name is required"
  ),
  last_name: Yup.string("Enter you last name").required(
    "Last name is required"
  ),
});

const EditProfile = () => {
  const history = useHistory();

  const submit = (data) => {};

  const classes = useStyles();
  const values = {
    first_name: "",
    last_name: "",
    password1: "",
    email: "",
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Formik
          render={(props) => <Form {...props} isLoading={false} />}
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={submit}
        />
      </div>
    </div>
  );
};

export default EditProfile;
