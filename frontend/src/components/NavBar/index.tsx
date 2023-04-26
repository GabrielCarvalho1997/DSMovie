import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GithubIcon from "assets/img/github.svg";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DSMovie
          </Typography>
          <Button color="inherit">
            <Link
              href="https://github.com/GabrielCarvalho1997/DSMovie"
              color="inherit"
              underline="none"
              target="_blank"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Github Icon"
                src={GithubIcon}
                sx={{ marginRight: 1 }}
              />
              Projeto
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
