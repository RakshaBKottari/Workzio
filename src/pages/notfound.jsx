import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4 text-yellow-300">404 Not Found</h1>
      <p className="text-xl mb-5 text-yellow-300">This page does not exist</p>
      <Link
        to="/"
        className="text-cyan-950 font-bold bg-cyan-500 hover:bg-yellow-300 rounded-md px-10 py-3 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
