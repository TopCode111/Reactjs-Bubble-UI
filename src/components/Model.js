import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Box } from "@material-ui/core";
import Button from "./Button";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import MediaCard from "../pages/Profile/components/Card";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  paper: {
    height: "470px",
    width: "380px",
    background: "white",
    outline: "none",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "70%",
    justifyContent: "center",
    flex: 1,
  },
}));

export default function SpringModal(props) {
  const { open, setOpen } = props;
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <MediaCard {...props} />
        {/* <div className={classes.paper}>
          <div
            style={{
              background: "#6367e7",
              height: "50%",
              borderBottomLeftRadius: "25%",
              borderBottomRightRadius: "25%",
              padding: "10px"
            }}
          >
            <div>
              <MenuIcon />
            </div>
            <Box className={classes.header}>
              <Avatar
                alt="Remy Sharp"
                className={classes.large}
                src="data:image/jpeg;base64,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"
              />
              <Link to="/profile"><p> Elon Musk </p></Link>
              <Link to="/profile"><p> @ElonMusk </p></Link>
            </Box>
          </div>
          <Box p={2}>
            <Box display="flex">
              <Box flex={2}>
                <Box flex={1} display="flex" flexDirection="column">
                  <span> About </span>
                  <span> asf </span>
                </Box>

                <Box display="flex" my={4}>
                  <Button
                    isLoading={false}
                    onChange={() => {}}
                    title="Post"
                    disabled={false}
                    size="small"
                  />
                  <Box m={1} />
                  <Button
                    isLoading={false}
                    onChange={() => {}}
                    title="Comments"
                    disabled={false}
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </Box>

              <Box flex={1}>
                <Box
                  display="flex"
                  flexDirection="column"
                  m={2}
                  textAlign="right"
                >
                  91
                  <span> Post </span>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  m={2}
                  textAlign="right"
                >
                  2.1K
                  <span> Followers </span>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  m={2}
                  textAlign="right"
                >
                  91k
                  <span> Following </span>
                </Box>
              </Box>
            </Box>
          </Box>
        </div> */}
      </Modal>
    </div>
  );
}
