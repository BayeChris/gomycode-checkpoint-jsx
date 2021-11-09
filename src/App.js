import imageInSrc from "./imageInSrc.jpg";
import './App.css';
import './style.css';
import maVideo from "./maVideo.mp4"

function App() {
  return (
    <div className="App">
      <div style={{ border:"solid 1px black",width:"300px",marginLeft:"40%"}}>
          <h1 className="titlered">CHRIS BAYE</h1>
        <br/>
          <img src={imageInSrc} alt='imageInSrc'/>
          <video src={maVideo} width="250" height="240" controls="controls" autoplay="true" />
        <br/>
          <img src="/imageInPublic.jpg" alt="imageinpublic" width="250px"/>
      </div>
    </div>
  );
}

export default App;
