import { useContext } from "react";
import { Link } from "react-router-dom";
import { FetchContext } from "../utils/context/contextApi";


function Home() {

  const { toggleFetch, fetch } = useContext(FetchContext)

  // if (fetch === "api") {
  //   console.log("on utilise api")
  // }
  // if (fetch === "mock") {
  //   console.log("on utilise mock")
  // }
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
          <div className='fetchButton'>
            <button onClick={() => toggleFetch()}>
              Utiliser {fetch === 'api' ? "données mockées" : "l'API"}
            </button>
          </div>

        </div>
      </div>

  );
}

export default Home;