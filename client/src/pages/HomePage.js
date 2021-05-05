import React from "react";
import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Header from "../components/Header";
import PostList from "../components/PostList";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import CreatePossModel from "../components/CreatePostModel";

function HomePage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePossModel />
      <Fab
        color="primary"
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default HomePage;
