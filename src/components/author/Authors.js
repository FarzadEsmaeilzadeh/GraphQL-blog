import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Avatar, Divider, Grid, Typography } from "@mui/material";

import { GET_AUTHORS_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import ErrorAlert from "../shared/ErrorAlert";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (error) return <ErrorAlert />;

  const { authors } = data;

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <Fragment key={author.id}>
          <Grid item sm={12} padding={2}>
            <Link
              to={`./authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item sm={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
