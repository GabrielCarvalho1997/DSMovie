import { Box, Card, CardMedia, CardContent, Typography, Button, Container, TextField, Rating } from "@mui/material";
import { Movie } from "types/movie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "utils";
import axios, { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";

type Props = {
  movieId?: string;
};

const FormCard = ({ movieId }: Props) => {
  const [value, setValue] = useState<number | null>();
  const [movie, setMovie] = useState<Movie>();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<any>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((res) => {
      setMovie(res.data);
    });
  }, [movieId]);

  const salvarSolicitacao = (data: any) => {
    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "PUT",
      url: "/scores",
      data: {
        email: data.email,
        movieId: movieId,
        score: value,
      },
    };

    axios(config)
      .then((res) => {
        console.log(res.data);
      })
      .finally(() => {
        navigate("/home");
      });
  };

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        onSubmit={handleSubmit(salvarSolicitacao)}
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
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              {...register("email", {
                required: {
                  value: true,
                  message: "Email obrigatório",
                },
              })}
            />
            <Typography gutterBottom variant="h6" component="div">
              Faça sua avaliação!
            </Typography>
            <Rating
              size="large"
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Button variant="contained" fullWidth type="submit">
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
