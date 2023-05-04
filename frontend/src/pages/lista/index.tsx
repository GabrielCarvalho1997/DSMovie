import { Box, Container, Pagination, Grid } from "@mui/material";
import axios from "axios";
import CardMovie from "components/Card";
import { useState, useEffect } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils";

const ListaDSMovie = () => {
  const [movies, setMovies] = useState<MoviePage>();
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`).then((res) => {
      setMovies(res.data);
    });
  }, [pageNumber]);

  const handleChange = (event: any, value: number) => {
    setPageNumber(value - 1);
  };

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
        <Pagination count={movies?.totalPages} size="large" showFirstButton showLastButton onChange={handleChange} />
        <Grid container item xs={12} spacing={2}>
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
