// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const renderMovies = () => (
    <MoviesSlider actionAndComedyMovieList={moviesList} />
  )

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="movies-container">{renderMovies()}</div>
    </div>
  )
}

export default PrimeVideo
