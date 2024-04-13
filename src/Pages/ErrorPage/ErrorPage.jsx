import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <h2 className="text-3xl">Error!</h2>
      <Link to="/">Go to home</Link>
    </div>
  );
}
