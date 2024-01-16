import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html";

import { GET_BLOG_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import ErrorAlert from "../shared/ErrorAlert";
import CommentForm from "../comment/CommentForm";
import Comment from "../comment/Comment";

function BlogPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <ErrorAlert />;

  const {
    post: { author, content, coverPhoto, title },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon
            onClick={() => navigate(-1)}
            color="primary"
            sx={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={coverPhoto.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: "15px" }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.primary">
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
          ></div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CommentForm slug={slug} />
      </Grid>
      <Grid item xs={12}>
        <Comment slug={slug} />
      </Grid>
    </Container>
  );
}

export default BlogPage;
