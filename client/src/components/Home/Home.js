import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "../../styles";
import { useDispatch } from "react-redux";

export const Home = () => {
  const [currentId, setcurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          className={classes.mainContainer}
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setcurrentId={setcurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setcurrentId={setcurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
