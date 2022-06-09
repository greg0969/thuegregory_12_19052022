import { Link } from "react-router-dom";
import FetchButton from "../components/FetchButton";
import FetchProvider from "../utils/context/contextApi";

// const User18 = "../api/User18/USER_MAIN_DATA";

function Home() {

  return (
    <FetchProvider>
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
            <FetchButton />
          </div>

        </div>
      </div>
    </FetchProvider>

  );
}

export default Home;