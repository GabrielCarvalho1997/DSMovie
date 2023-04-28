import { Box, Card, CardMedia, CardContent, Typography, Button, Container, TextField, Rating } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormDSMovie = () => {
  const [value, setValue] = useState<number | null>(2);
  const navigate = useNavigate();
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
          <CardMedia component="img" height="200" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              Nome do filme
            </Typography>
            <TextField label="Email" variant="outlined" fullWidth />
            <Typography component="legend">Avaliação</Typography>
            <Rating
              size="large"
              value={value}
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

export default FormDSMovie;
