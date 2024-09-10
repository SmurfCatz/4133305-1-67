import { FC } from "react";

const Card: FC = () =>{
    return(<div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i1.sndcdn.com/avatars-7zxeUFLExyniYVhW-mUMTBQ-t1080x1080.jpg"
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>)
}
export default Card;