import React from "react";
import Button from "../../../components/Button";
import TextField from "../../../components/TextInput";

export const ChangePassword = (props) => {
  const {
    values: { current_password, new_password, new_password_confirmation },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    isLoading,
    setFieldValue,
  } = props;

  const change = (e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "auto" }}>
      <TextField
        name="現在パスワード"
        helperText={touched.current_password ? errors.current_password : ""}
        error={touched.current_password && Boolean(errors.current_password)}
        label="現在パスワード"
        fullWidth
        type="password"
        value={current_password}
        onChange={handleChange}
      />
      <TextField
        name="新しいパスワード"
        helperText={touched.new_password ? errors.new_password : ""}
        error={touched.new_password && Boolean(errors.new_password)}
        label="新しいパスワード"
        fullWidth
        type="password"
        value={new_password}
        onChange={handleChange}
      />
      <TextField
        name="パスワード確認"
        helperText={
          touched.new_password_confirmation
            ? errors.new_password_confirmation
            : ""
        }
        error={
          touched.new_password_confirmation &&
          Boolean(errors.new_password_confirmation)
        }
        label="パスワード確認"
        fullWidth
        type="password"
        value={new_password_confirmation}
        onChange={handleChange}
      />
      <Button
        type="submit"
        isLoading={isLoading}
        onChange={handleSubmit}
        title="パスワード変更"
        disabled={!isValid || isLoading}
      />
    </form>
  );
};
