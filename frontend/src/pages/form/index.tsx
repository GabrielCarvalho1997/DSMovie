import FormCard from "components/FormCard";
import { useParams } from "react-router-dom";

const FormDSMovie = () => {
  const params = useParams();

  return <FormCard movieId={params.movieId} />;
};

export default FormDSMovie;
