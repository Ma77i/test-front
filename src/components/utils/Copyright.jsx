import { Link } from "react-router-dom";


const Copyright = () => {
  return (
    <div>
      {"Copyright © "}
      <Link color="inherit" to="https://www.linkedin.com/in/mattias-silva">
        Matias Silva
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
}

export default Copyright