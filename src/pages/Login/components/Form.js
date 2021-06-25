import React from "react";
import Button from "../../../components/Button";
import TextField from "../../../components/TextInput";

export const Form = (props) => {
  const {
    values: { email, password },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    isLoading,
  } = props;

  const change = (e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="email"
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        label="メールアドレス"
        type="email"
        value={email}
        onChange={change}
      />

      <TextField
        name="password"
        helperText={touched.password ? errors.password : ""}
        error={ touched.password && Boolean(errors.password)}
        label="パスワード"
        type="password"
        value={password}
        onChange={change}
      />
      <Button
        type="submit"
        isLoading={isLoading}
        onChange={handleSubmit}
        title="ログイン"
        disabled={!isValid || isLoading}
      />
    </form>
  );
};
