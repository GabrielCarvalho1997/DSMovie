import { Box, Card, CardMedia, CardContent, Typography, Button, Container, TextField, Rating } from "@mui/material";
import { Movie } from "types/movie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "utils";
import axios from "axios";

type Props = {
  movieId?: string;
};

const FormCard = ({ movieId }: Props) => {
  const [value, setValue] = useState<number | null>();
  const [movie, setMovie] = useState<Movie>();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((res) => {
      console.log(res.data);
      setMovie(res.data);
    });
  }, [movieId]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginY: 4,
        }}
      >
        <Card sx={{ maxWidth: 345, minWidth: 500 }} elevation={4}>
          <CardMedia component="img" image={movie?.image} alt={movie?.title} />
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              {movie?.title}
            </Typography>
            <TextField label="Email" type="email" variant="outlined" fullWidth />
            <Rating
              size="large"
              precision={0.5}
              value={movie?.score}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Button variant="contained" fullWidth onClick={() => navigate("/home")}>
              Salvar
            </Button>
            <Button variant="contained" fullWidth onClick={() => navigate("/home")}>
              Cancelar
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default FormCard;
