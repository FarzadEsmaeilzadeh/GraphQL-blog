import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Typography } from "@mui/material";

import { GET_BLOG_COMMENTS } from "../../graphql/queries";

function Comment({ slug }) {
  const { loading, data } = useQuery(GET_BLOG_COMMENTS, {
    variables: { slug },
  });
  if (loading) return null;

  if (!data.comments.length) return null;

  return (
    <Grid
      container
      py={1}
      mt={8}
      borderRadius={4}
      boxShadow="rgba(0,0,0,0.1) 0px 4px 12px"
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            item
            xs={12}
            m={2}
            p={2}
            key={comment.id}
            border="1.5px dashed silver "
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comment;
