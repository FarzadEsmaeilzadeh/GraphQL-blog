import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="h6"
        variant="h6"
        padding="10px"
        bgcolor="#f7f7f7"
        color="primary"
        textAlign="center"
        mt={10}
      >
        پروژه وبلاگ با GraphQl | توسعه یافته توسط Feri
      </Typography>
    </footer>
  );
}

export default Footer;
