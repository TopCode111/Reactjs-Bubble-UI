import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import LocalStorageService from "../../utils/localStorageService";
const localStorageService = LocalStorageService.getService();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const token = localStorageService.getAccessToken();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Characters</Link>
          </Typography>
          <Box mx={2}>
            <Link to="/">
              {" "}
              <Typography variant="h6">ホーム</Typography>{" "}
            </Link>
          </Box>
          <Box mx={2}>
            <Link to="/users">
              {" "}
              <Typography variant="h6">用户</Typography>{" "}
            </Link>
          </Box>
          <Box>
            <Link to="/profile">
              {" "}
              <Typography variant="h6">プロフィール</Typography>{" "}
            </Link>
          </Box>

          {!token && (
            <>
              {" "}
              <Box mx={2}>
                <Link to="/login">
                  {" "}
                  <Typography variant="h6">ログイン</Typography>{" "}
                </Link>
              </Box>
              <Box mx={2}>
                <Link to="/signup">
                  {" "}
                  <Typography variant="h6">登録</Typography>{" "}
                </Link>
              </Box>{" "}
            </>
          )}

          {token && (
            <Box mx={2}>
              <Link
                onClick={() => {
                  localStorageService.clearToken(null);
                  history.push("/login");
                }}
              >
                <Typography variant="h6">ログアウト</Typography>{" "}
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}
