// import profilePic from './assets/Ghost_.jpeg'

function Card(props) {
    return(
        <div className="card">
            <img className='card-image' src={props.img} alt="Ghost" />
            <h2 className='card-title'>Username: {props.name}</h2>
            <p className='card-text'>Rank: {props.rank}</p>
        </div>    
    );
}

export default Card