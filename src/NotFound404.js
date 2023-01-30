import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <div className="not-found-404">
      <h1 className="color-ff8b34 font-Kanit lh-90">404</h1>
      <h2 className="font-Kanit">Page Not Found</h2>
      <p className="px-40 text-center mx-5 mb-4">The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
      <Link to="/" className="button bounce-transition">
        Back To Home
      </Link>
    </div>
  );
}
