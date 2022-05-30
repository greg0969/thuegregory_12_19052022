import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home">
      <div className="home__group">
        <h1 className="home__title">Bienvenue</h1>
        <div className="home__users">
          <Link to="user/12" className="home__user">
            Karl
          </Link>
          <Link to="user/18" className="home__user">
            Cecilia
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;