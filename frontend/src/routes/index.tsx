import FormDSMovie from 'pages/form';
import ListaDSMovie from 'pages/lista';
import { Navigate, Route, Routes } from 'react-router-dom';

const Rotas = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={'/home'} />} />
      <Route path="/home" element={<ListaDSMovie />} />
      <Route path="/form">
        <Route path=":movieId" element={<FormDSMovie />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
