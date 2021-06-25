import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import LocalStorageService from "../utils/localStorageService";
const localStorageService = LocalStorageService.getService();

const RouteMiddleWare = ({ children, layout: Layout, ...rest }) => {
  const token = localStorageService.getAccessToken();
  const isValid = token;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isValid ? (
          Layout ? (
            <Layout>{children}</Layout>
          ) : (
            <> {children} </>
          )
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default RouteMiddleWare;
