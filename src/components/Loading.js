import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./img/refresh.svg";
import "./Loading.css";

const Loading = (data) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <p>Loading...</p>
        <img id="loading" src={icon} alt="" />
      </div>
    </>
  );
};

export default Loading;
