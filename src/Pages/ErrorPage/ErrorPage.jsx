import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h2 className="text-3xl">Error!</h2>
      <Link to="/">Go to home</Link>
    </div>
  );
}
