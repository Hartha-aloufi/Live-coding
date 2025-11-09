import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default NotFoundPage;
