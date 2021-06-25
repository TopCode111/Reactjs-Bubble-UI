import React from "react";
import Button from "../../../components/Button";
import TextField from "../../../components/TextInput";
import Box from "@material-ui/core/Box";

export const Form = (props) => {
  const {
    values: { user_name, password_confirmation, password, email },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    isLoading,
    setFieldValue,
  } = props;

  // const change = (e) => {
  //   e.persist();
  //   setFieldTouched(e.target.name, true, false);
  // };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "auto",  width: "90%"}}>
      <TextField
        name="user_name"
        helperText={touched.user_name ? errors.user_name : ""}
        error={touched.user_name && Boolean(errors.user_name)}
        label="ユーザー名"
        value={user_name}
        onChange={handleChange}
      />
      <TextField
        name="email"
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        label="メールアドレス"
        fullWidth
        value={email}
        onChange={handleChange}
      />
      <TextField
        name="password"
        helperText={touched.password ? errors.password : ""}
        error={touched.password && Boolean(errors.password)}
        label="パスワード"
        fullWidth
        type="password"
        value={password}
        onChange={handleChange}
      />
      <TextField
        name="password_confirmation"
        helperText={
          touched.password_confirmation ? errors.password_confirmation : ""
        }
        error={
          touched.password_confirmation && Boolean(errors.password_confirmation)
        }
        label="パスワード確認"
        fullWidth
        type="password"
        value={password_confirmation}
        onChange={handleChange}
      />
      <Button
        type="submit"
        isLoading={isLoading}
        onChange={handleSubmit}
        title="登録"
        disabled={!isValid || isLoading}
      />
    </form>
  );
};
