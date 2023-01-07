// 01 - Components
import LogoPopcornPlaceholder from '../../images/logo-popcorn-placeholder'

export default function MovieItem({movies}) {
   console.log(movies)

const renderMovies = movies.movies.map(movie => {
   return (
      
      <div className='movie-item'>
         
            {  movie.poster_path !== null ?
               <img className='flux-movie-img' 
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                  alt={movie.title}
               />
               :
               <div className='card-image-placeholder placeholder-body'>
                  <div>
                     <LogoPopcornPlaceholder/>
                     <p className='placeholder-text'>IMG NOT FOUND</p>
                  </div>
               </div>
            }
      </div>

      
   )
})
   return (
      <>
         {renderMovies} 
      </>
   )
}