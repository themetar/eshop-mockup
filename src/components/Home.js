import { Link } from 'react-router-dom';

function Home() {
  return (
    <header className="flex-grow flex flex-col content-center justify-center items-center splash-image bg-cover rounded-lg">
      <h1 className="text-4xl text-white text-center mb-2">Welcome to our online shop.</h1>
      <p className="text-4xl">
        <Link to="/store" className="bg-yellow-200 text-red-500 italic hover:text-red-600 px-2 py-1">Start shopping!</Link>
      </p>
    </header>
  );
}

export default Home;
