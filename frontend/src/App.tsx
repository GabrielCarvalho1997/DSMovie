import NavBar from 'components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Rotas from 'routes';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <NavBar />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
