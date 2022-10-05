import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className=''>
      <h1>
        404 YOU ARE LOST HERE!
      </h1>
      <Link style={{ textDecoration: "none", color: "inherit", margin: "10px" }} to="/store">
        <Button>
          GET BACK HOME
        </Button>
      </Link>
    </div>
  );
}

export default PageNotFound