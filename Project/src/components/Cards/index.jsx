import "./index.scss";
import Canta from "../../Media/canta.png";
const Card = () => {
  return (
    <div className="textImg">
      <div className="container">
        <div className="text">
          <p className="endirim">30% off</p>
          <br />
          <br />
          <h1>Handbag products</h1>
          <br />
          <br />
          <p style={{ width: "350px" }}>
            It is a long established fact that a reader will be distracted by
            the readable content expound the actual teachings of the great
            explorer
          </p>
          <br />
          <br />
          <br />

          <button>Shop now</button>
        </div>
      </div>

      <div className="container">
        <div className="img">
          <img className="image" src={Canta} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default Card;
