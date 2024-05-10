// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {eachActionItem} = props
  const {thumbnailUrl, videoUrl} = eachActionItem
  return (
    <div className="list-item-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
        className="popup-content"
      >
        {close => (
          <div className="react-container">
            <div className="button-container" data-testid="closeButton">
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <IoMdClose className="icon" />.
              </button>
            </div>
            <div className="react-player-container">
              <ReactPlayer url={videoUrl} controls width={900} height={400} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
