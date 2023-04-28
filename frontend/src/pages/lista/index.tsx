import { Box, Container, Pagination, Grid } from "@mui/material";
import CardMovie from "components/Card";
import { useState } from "react";

const ListaDSMovie = () => {
  const [rating, setRating] = useState<number>(2);
  const [count, setCount] = useState<number>(2);
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
          <Grid item xs={3}>
            <CardMovie rating={rating} count={count} />
          </Grid>
          <Grid item xs={3}>
            <CardMovie rating={rating} count={count} />
          </Grid>
          <Grid item xs={3}>
            <CardMovie rating={rating} count={count} />
          </Grid>
          <Grid item xs={3}>
            <CardMovie rating={rating} count={count} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ListaDSMovie;
