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
import {useState} from "react";
import { ethers } from "ethers"

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

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
            <img src={team} alt="" />
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
        <button onClick={requestAccount}><img src={connect} alt=""/></button>
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
