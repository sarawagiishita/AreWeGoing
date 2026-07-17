import { Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-5xl font-bold">
        AreWeGoing?
      </h1>

      <p className="text-gray-600">
        Because great trips begin when expectations align.
      </p>

      <Link to="/create-trip">
        <Button variant="primary">
          Create a Trip
        </Button>
      </Link>

      <p>OR</p>

      <Link to="/join-trip">
        <Button variant="secondary">
          Join a Trip
        </Button>
      </Link>
    </div>
  );
}

export default Home;