import RatingBadge from "./RatingBadge";

export default function SmallCard(movie) {
    return(
        <div className='card'>
            <div className='card-header'>
                <img className='card-image' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
            </div>
        </div>
    )
}