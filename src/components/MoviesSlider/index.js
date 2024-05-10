// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const SampleNextArrow = props => {
  const {className, style, onClick} = props
  return (
    <button
      type="button"
      className={className}
      style={{
        ...style,
        display: 'block',
        backgroundColor: '#000000',
      }}
      onClick={onClick}
    >
      .
    </button>
  )
}

const SamplePrevArrow = props => {
  const {className, style, onClick} = props
  return (
    <button
      type="button"
      className={className}
      style={{...style, display: 'block', backgroundColor: '#000000'}}
      onClick={onClick}
    >
      .
    </button>
  )
}

const MoviesSlider = props => {
  const {actionAndComedyMovieList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slideToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
  }

  return (
    <div className="slider-container">
      <h1 className="action-heading">Action Movies</h1>
      <Slider {...settings}>
        {actionAndComedyMovieList.map(
          eachItem =>
            eachItem.categoryId === 'ACTION' && (
              <MovieItem key={eachItem.id} eachActionItem={eachItem} />
            ),
        )}
      </Slider>
      <h1 className="comedy-heading">Comedy Movies</h1>
      <Slider {...settings}>
        {actionAndComedyMovieList.map(
          eachItem =>
            eachItem.categoryId === 'COMEDY' && (
              <MovieItem key={eachItem.id} eachActionItem={eachItem} />
            ),
        )}
      </Slider>
    </div>
  )
}

export default MoviesSlider
