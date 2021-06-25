import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import { useHistory } from "react-router";
import { Form } from "./components/Form";
import { ChangePassword } from "./components/ChangePasswordForm";
import Box from "@material-ui/core/Box";
import Card from "./components/Card";
import * as Yup from "yup";
import useStyles from "./styles";
import {
  useUpdateUser,
  useUpdateProfilePicture,
  useChangePassword,
} from "../../hooks/users/useUsers";
import LocalStorageService from "../../utils/localStorageService";
const localStorageService = LocalStorageService.getService();

const validationSchema = Yup.object({
  user_name: Yup.string("Enter you user name").required("Required"),
  country: Yup.string("Enter you country").required("Required"),
  self_introduction: Yup.string("Enter description").required("Required"),
  profession: Yup.string("Enter you profession").required(
    "Last name is required"
  ),
});

const passwordFormValidationSchema = Yup.object({
  current_password: Yup.string("")
    .min(4, "Password must contain atleast 4 characters")
    .required("入力してください。"),
  new_password: Yup.string("")
    .min(4, "Password must contain atleast 4 characters")
    .required("入力してください。"),
  new_password_confirmation: Yup.string("")
    .min(4, "Password must contain atleast 4 characters")
    .required("入力してください。"),
});

const EditProfile = () => {
  const history = useHistory();
  const currentUser = localStorageService.getCurrentUser();
  const [currentProfile, setCurrentProfile] = useState({});
  const { mutate: updateUser } = useUpdateUser();
  const { mutate: uploadProfilePicture } = useUpdateProfilePicture();
  const { mutate: updatePassword } = useChangePassword();

  useEffect(() => {
    setCurrentProfile(currentUser.profile);
    setUpdatedValues({
      ...currentUser.profile,
      avatar: {
        avatar: `https://api.goodracing.net/images/users/${currentUser?.profile?.avatar}`,
      },
    });
  }, []);

  const submit = (data) => {
    updateUser(data);
  };

  const uploadImage = () => {
    formvalue?.avatar?.e && uploadProfilePicture(formvalue.avatar.e);
  };
  const changePassword = (data) => {
    updatePassword(data);
  };

  const classes = useStyles();
  const values = {
    user_name: currentProfile?.user_name,
    country: currentProfile?.country,
    self_introduction: currentProfile?.self_introduction,
    profession: currentProfile?.profession,
  };
  const passwordFormValues = {
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  };

  const [formvalue, setUpdatedValues] = useState({});

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Box>
          <Box mb={2}>
            <Formik
              render={(props) => (
                <Form
                  {...props}
                  isLoading={false}
                  avatar={formvalue?.avatar}
                  handleAvatar={(avatar) =>
                    setUpdatedValues({ ...currentProfile, avatar: avatar })
                  }
                  setValues={setUpdatedValues}
                  uploadImage={uploadImage}
                />
              )}
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={submit}
              enableReinitialize={true}
            />
          </Box>

          <Formik
            render={(props) => <ChangePassword {...props} isLoading={false} />}
            initialValues={passwordFormValues}
            validationSchema={passwordFormValidationSchema}
            onSubmit={changePassword}
          />
        </Box>
        <div className={classes.mobilePreview}>
          <Card
            user_name={formvalue?.user_name}
            profession={formvalue?.profession}
            country={formvalue?.country}
            self_introduction={formvalue?.self_introduction}
            avatar={formvalue?.avatar?.avatar}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
