import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "13px",
    background: "white",
  },
}));

const SearchBar = ({ value, handleChange }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">検索</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={value}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
