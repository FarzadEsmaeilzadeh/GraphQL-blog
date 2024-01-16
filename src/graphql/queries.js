import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query GetBlogsInfo {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      id
      slug
      coverPhoto {
        url
      }
    }
  }
`;

const GET_BLOG_INFO = gql`
  query GetBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        field
        name
      }
      content {
        html
      }
      title
      slug
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query GetAuthorsInfo {
    authors {
      name
      id
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query GetAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_BLOG_COMMENTS = gql`
  query GetBlogComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_BLOG_INFO,
  GET_BLOG_COMMENTS,
};
