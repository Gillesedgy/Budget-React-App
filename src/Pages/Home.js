import "./Home.css";
import money from "../Assets/money.mp4";
export default function Home() {
  return (
    <div className="Home">
      <div className="Overlay"></div>
      <video className="Video" src={money} muted autoPlay loop></video>
      <h1>Welcome dotReduce($) </h1>
      <div className="Text">
  
        <h3>Live Like No One Else</h3>
        <br />
        <h2>So One Day You Can Live Like No One Else</h2>
      </div>
    </div>
  );
}
