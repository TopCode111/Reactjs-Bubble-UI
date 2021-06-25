import { Box } from "@material-ui/core";
import Bubbles from "./components/Bubbles";
import SearchBar from "../../components/SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import { useFetchAllUsers } from "../../hooks/users/useUsers";
import { useCurrentUser } from "../../hooks/auth/useCurrentUser";

const useStyles = makeStyles((theme) => ({
  searchBarContainer: {
    position: "absolute",
    top: "83px",
    zIndex: 10000000,
    right: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { data } = useFetchAllUsers();
  const { data: currentUser } = useCurrentUser();
  return (
    <Box width="100%">
      {/* <Box className={classes.searchBarContainer}>
        <SearchBar value={""} handleChange={() => {}} />
      </Box> */}
      <Bubbles data={data?.data} />
    </Box>
  );
};

export default Home;
