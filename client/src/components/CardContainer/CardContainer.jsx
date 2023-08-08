import Card from "../Card/Card";
import './Cardcontainer.css';

const videogames = [
        {
            "id": 3498,
            "name": "Grand Theft Auto V",
            "description": "",
            "platforms": [
                "PlayStation 5",
                "Xbox Series S/X",
                "PlayStation 4",
                "PC",
                "PlayStation 3",
                "Xbox 360",
                "Xbox One"
            ],
            "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            "releaseDate": "2013-09-17",
            "rating": 4.47
        },
        {
            "id": 3328,
            "name": "The Witcher 3: Wild Hunt",
            "description": "",
            "platforms": [
                "Xbox Series S/X",
                "PlayStation 4",
                "Nintendo Switch",
                "PC",
                "Xbox One",
                "PlayStation 5"
            ],
            "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            "releaseDate": "2015-05-18",
            "rating": 4.66
        },
        {
            "id": 4200,
            "name": "Portal 2",
            "description": "",
            "platforms": [
                "Xbox 360",
                "Linux",
                "macOS",
                "PlayStation 3",
                "PC",
                "Xbox One"
            ],
            "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            "releaseDate": "2011-04-18",
            "rating": 4.61
        },
        {
            "id": 5286,
            "name": "Tomb Raider (2013)",
            "description": "",
            "platforms": [
                "PlayStation 4",
                "macOS",
                "PC",
                "Xbox One",
                "Xbox 360",
                "PlayStation 3"
            ],
            "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            "releaseDate": "2013-03-05",
            "rating": 4.05
        },
        {
            "id": 4291,
            "name": "Counter-Strike: Global Offensive",
            "description": "",
            "platforms": [
                "PC",
                "Xbox 360",
                "PlayStation 3"
            ],
            "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            "releaseDate": "2012-08-21",
            "rating": 3.57
        },
        {
            "id": 13536,
            "name": "Portal",
            "description": "",
            "platforms": [
                "Android",
                "PlayStation 3",
                "Xbox 360",
                "Linux",
                "macOS",
                "PC",
                "Nintendo Switch"
            ],
            "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
            "releaseDate": "2007-10-09",
            "rating": 4.51
        }
]

function CardsContainer() {
    return ( 
        <div className="cards-container">
        {videogames.map((v) => (
            <Card
            img={v.image}
            name={v.name}
            genres={v.genres}
            />
        ))}
        </div>
    );
}

export default CardsContainer;