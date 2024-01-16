import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1C39BB" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" style={{textDecoration:"none", color:"#ffffff"}}>
            <Typography component="h1" variant="h5" fontWeight="bold">
              فری وبلاگ
            </Typography>
          </Link>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
