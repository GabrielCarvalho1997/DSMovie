import { Card, CardMedia, CardContent, Typography, Rating, Button, CardActions } from "@mui/material";
import { Movie } from "types/movie";

type Props = {
  movie: Movie;
};

const CardMovie = ({ movie }: Props) => {
  return (
    <Card elevation={4} sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "center", paddingBottom: 2 }}>
      <CardMedia component="img" image={movie.image} />
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
          }}
        >
          {movie.title}
        </Typography>
        <Typography component="legend" color="#FAAF00" fontWeight="bold" fontSize="large">
          {movie.score === 0 ? "-" : movie.score.toFixed(1)}
        </Typography>
        <Rating value={movie.score} readOnly size="large" />
        <Typography component="legend" fontSize="small" sx={{ opacity: "0.7" }}>
          {movie.count} Avaliações
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth>
          Avaliar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardMovie;
