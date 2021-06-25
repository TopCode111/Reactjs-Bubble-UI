import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "../../../components/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
    borderRadius: "20px",
  },
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  subHeading: {
    color: "#616161",
    lineHeight: "30px",
    letterSpacing: "0.75px",
    fontWeight: "300",
    padding: "0px",
    textAlign: "center",
  },
  location: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#616161",
    lineHeight: "30px",
    letterSpacing: "0.75px",
    fontWeight: "300",
    padding: "0px",
  },
  description: {
    textAlign: "inherit",
  },
  stats: {
    display: "grid",
    background: "aliceblue",
    gridTemplateColumns: "1fr 1fr 1fr",
    borderTop: "1px solid #ccc9c9",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2),
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
}));

export default function MediaCard({
  user_name,
  profession,
  country,
  self_introduction,
  avatar,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        //image="https://i.pinimg.com/originals/9e/8d/74/9e8d747819250be17bff875604223894.jpg"
        title="Contemplative Reptile"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          background: "linear-gradient(to bottom, rgb(0 88 187), rgb(182 214 255))"
        }}
      >
        <Avatar
          alt="Remy Sharp"
          className={classes.large}
          style={{
            position: "relative",
            top: "34px",
            zIndex: "1",
          }}
          src={`${avatar}`}
        />
      </CardMedia>
      <CardContent
        style={{
          borderTopLeftRadius: "10%",
          borderTopRightRadius: "10%",
          position: "relative",
          background: "white",
          top: "-21px",
        }}
      >
        <Box pt={5}>
          <Link to="/profile">
            <Typography variant="h4" className={classes.textCenter}>
              {user_name}
            </Typography>
          </Link>

          <Typography gutterBottom variant="h4" className={classes.subHeading}>
            {profession}
          </Typography>

          <Typography
            gutterBottom
            variant="caption"
            className={classes.location}
          >
            <LocationOnIcon fontSize="small" /> {country}
          </Typography>
          {/* <Box display="flex" mt={4}>
            <Button
              isLoading={false}
              onChange={() => {}}
              title="Follow"
              disabled={false}
              size="small"
              variant="outlined"
            />
            <Box m={1} />
            <Button
              isLoading={false}
              onChange={() => {}}
              title="Message"
              disabled={false}
              size="small"
              variant="outlined"
            />
          </Box> */}
          <Box mt={2}>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              紹介:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {self_introduction}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Box className={classes.stats}>
        <Box className={classes.stat}>
          91
          <span> Post </span>
        </Box>
        <Box className={classes.stat}>
          2.1K
          <span> Followers </span>
        </Box>
        <Box className={classes.stat}>
          91k
          <span> Following </span>
        </Box>
      </Box>
    </Card>
  );
}
