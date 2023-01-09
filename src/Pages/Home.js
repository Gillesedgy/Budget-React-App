import "./Home.css";
import money from "../Assets/money.mp4";
export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to your Budget App </h1>
      <video loop autoPlay></video> <source src={money} type="video/mp4" />
      <div className="overlay"></div>
      <div className="text">
        <h3>Live like no one else</h3>
        <h2>So one day you can live like no one else</h2>
      </div>
    </div>
  );
}
