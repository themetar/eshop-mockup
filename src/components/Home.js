import { Link } from 'react-router-dom';

function Home() {
  return (
    <header className="flex-grow flex content-center justify-center items-center splash-image bg-cover rounded-lg">
      <h1 className="text-4xl text-white text-center">Welcome to our online shop. <Link to="/store">Start shopping!</Link></h1>
    </header>
  );
}

export default Home;
