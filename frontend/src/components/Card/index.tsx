import { Card, CardMedia, CardContent, Typography, Rating, Button } from "@mui/material";

type Props = {
  rating: number;
  count: number;
};

const CardMovie = ({ rating, count }: Props) => {
  return (
    <Card elevation={4}>
      <CardMedia component="img" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          Nome do filme
        </Typography>
        <Typography component="legend" color="#FAAF00" fontWeight="bold" fontSize="large">
          {rating === 0 ? "-" : rating.toFixed(1)}
        </Typography>
        <Rating value={rating} readOnly size="large" />
        <Typography component="legend" fontSize="small" sx={{ opacity: "0.7" }}>
          {count} Avaliações
        </Typography>
        <Button variant="contained" fullWidth>
          Avaliar
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardMovie;
