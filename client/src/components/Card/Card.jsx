import './Card.css';

function Card({img, name, genres}) {
    return ( 
        <div className="card">
         <img src={img} className="card-img-top" alt="..."/>
         <div className="card-body">
            <p className="card-text">{name}</p>
            <p className="card-text">{genres}</p>
         </div>
        </div>
    );
}

export default Card;