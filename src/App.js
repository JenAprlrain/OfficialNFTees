import container from "./data/container.png";
import collections from "./data/collections.png";
import connect from "./data/connect.png";
import nftees from "./data/nftees.png";
import partners from "./data/partners.png";
import rare from "./data/rare.png";
import team from "./data/team.png";
import tees from "./data/tees.png";
import ultra from "./data/ultra.png";
import medium from "./data/medium.png";
import tLogo from "./data/t-logo.png";
import twitter from "./data/twitter.png";
import twitch from "./data/twitch.png";

function App() {
  return (
    <div className="container">
      <div className="hero">
        <img src={container} alt="" />
      </div>
      <div className="content">
        <div className="collections-highlight">
          <a href="#">
            <img src={collections} alt="" />
          </a>
        </div>
        <div className="team-highlight">
          <a href="#">
            <img src={team} alt="" />
          </a>
        </div>
        <div className="tees-highlight">
          <a href="#">
            <img src={tees} alt="" />
          </a>
        </div>
        <div className="rare-highlight">
          <a href="#">
            <img src={rare} alt="" />
          </a>
        </div>
        <div className="ultra-highlight">
          <a href="#">
            <img src={ultra} alt="" />
          </a>
        </div>
        <div className="nftees-highlight">
          <a href="#">
            <img src={nftees} alt="" />
          </a>
        </div>
        <div className="partners-highlight">
          <a href="#">
            <img src={partners} alt="" />
          </a>
        </div>
        <div className="connect-highlight">
          <a href="#">
            <img src={connect} alt="" />
          </a>
        </div>
        <div className="medium-highlight">
          <a href="#">
            <img src={medium} alt="" />
          </a>
        </div>
        <div className="t-highlight">
          <a href="#">
            <img src={tLogo} alt="" />
          </a>
        </div>
        <div className="twitter-highlight">
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="twitch-highlight">
          <a href="#">
            <img src={twitch} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
