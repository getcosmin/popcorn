export default function MovieItem({movies}) {

const renderMovies = movies.movies.map(movie => {
   return (
      
      <div className='movie-item'>
         <img className='flux-movie-img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
      </div>
      
   )
})
   return (
      <>
         {renderMovies} 
      </>
   )
}