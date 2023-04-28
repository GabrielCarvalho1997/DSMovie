import { Box, AppBar, Toolbar, Typography, Button, Link, Avatar, Container } from "@mui/material";

import GithubIcon from "assets/img/github.svg";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
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
                <Avatar alt="Github Icon" src={GithubIcon} sx={{ marginRight: 1, width: 35, height: 35 }} />
                GabrielCarvalho1997
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
