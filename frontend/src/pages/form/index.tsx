import { Box, Card, CardMedia, CardContent, Typography, Button, Container, TextField } from '@mui/material';

const FormDSMovie = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginY: 4,
        }}
      >
        <Card sx={{ maxWidth: 345, minWidth: 500 }} elevation={4}>
          <CardMedia component="img" height="200" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography gutterBottom variant="h5" component="div">
              Nome do filme
            </Typography>
            <TextField variant="outlined" fullWidth />
            <TextField variant="outlined" fullWidth />
            <Button variant="contained" fullWidth>
              Salvar
            </Button>
            <Button variant="contained" fullWidth>
              Cancelar
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default FormDSMovie;
