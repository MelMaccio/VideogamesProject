import CardsContainer from "../../components/CardContainer/CardContainer";
import Pagination from "../../components/Pagination/Pagination";
import './Home.css';

function Home () {
    return ( 
        <div className="home-container">
            <CardsContainer/>
            <Pagination/>
        </div>
     );
}

export default Home;