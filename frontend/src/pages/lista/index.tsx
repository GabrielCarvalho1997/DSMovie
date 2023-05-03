import { Box, Container, Pagination, Grid } from "@mui/material";
import axios, { AxiosRequestConfig } from "axios";
import CardMovie from "components/Card";
import { useState, useEffect } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils";

const ListaDSMovie = () => {
  const [movies, setMovies] = useState<MoviePage>();
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`).then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, [pageNumber]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginY: 4,
          gap: 4,
        }}
      >
        <Pagination count={3} size="large" showFirstButton showLastButton />
        <Grid container item xs={12} spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
          {movies?.content.map((movie, i) => (
            <Grid item xs={3} key={i}>
              <CardMovie movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ListaDSMovie;
