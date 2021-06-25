import React from "react";
import Button from "../../../components/Button";
import TextField from "../../../components/TextInput";
import Box from "@material-ui/core/Box";
import AvatarUploader from "../../../components/AvatarUplaoder";
import ReactFlagsSelect from "react-flags-select";
import LocalStorageService from "../../../utils/localStorageService";
const localStorageService = LocalStorageService.getService();

export const Form = (props) => {
  const {
    values: { user_name, profession, self_introduction, country },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    isLoading,
    setFieldValue,
    avatar,
    setValues,
    handleAvatar,
    uploadImage,
  } = props;

  const change = (e) => {
    handleChange(e);
    setValues({
      user_name,
      profession,
      self_introduction,
      country,
      avatar: avatar,
    });
  };

  const handleCountry = (name, code) => {
    setFieldValue(name, code);
    setValues({
      user_name,
      profession,
      self_introduction,
      country,
      avatar: avatar,
    });
  };
  const token = localStorageService.getAccessToken();

  return (
    <form onSubmit={handleSubmit} style={{ margin: "auto" }}>
      <Box
        m={2}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <AvatarUploader value={avatar?.avatar} onChange={handleAvatar} />
        <Box>
          <Button
            onChange={uploadImage}
            title="画像保管"
            disabled={!isValid || isLoading}
            size="small"
            variant="outlined"
          />
        </Box>
      </Box>

      <TextField
        name="ユーザー名"
        helperText={touched.user_name ? errors.user_name : ""}
        error={touched.user_name && Boolean(errors.user_name)}
        label="ユーザー名"
        value={user_name}
        onChange={change}
      />
      <TextField
        name="profession"
        helperText={touched.profession ? errors.profession : ""}
        error={touched.profession && Boolean(errors.profession)}
        label="職業"
        value={profession}
        onChange={change}
      />

      <TextField
        name="self_introduction"
        helperText={touched.self_introduction ? errors.self_introduction : ""}
        error={touched.self_introduction && Boolean(errors.self_introduction)}
        label="紹介"
        fullWidth
        value={self_introduction}
        onChange={change}
        multiline={true}
      />
      <ReactFlagsSelect
        selected={country}
        onSelect={(code) => {
          handleCountry("country", code);
        }}
      />
      <Button
        type="submit"
        isLoading={isLoading}
        onChange={handleSubmit}
        title="プロフィール更新"
        disabled={!isValid || isLoading}
      />
    </form>
  );
};
