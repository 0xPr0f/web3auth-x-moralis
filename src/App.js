import "./App.css";
import logo from "./logo.svg";
import w3authlogo from "./web3authlogo.png";
import { useMoralis } from "react-moralis";

function App() {
  const {
    isAuthenticated,
    authError,
    isAuthenticating,
    logout,
    user,
    authenticate,
  } = useMoralis();

  const handleCustomLogin = async () => {
    authenticate({
      provider: "web3Auth",
      clientId:
        "BGny-kghxFcbCNbfNFn1t66jwqxtnr2744vQ9aHHr06u7jhe9iI1nm1zPKLkVKer0cW2F6Weip8FZ24rwfMwFEs",
    });
  };

  return (
    <div className="backgroundParent">
      <div className="App">
        <h2>Test web3Auth x Moralis</h2>
        <div className="logos">
          <img src={logo} alt="moralis logo" />
          <img src={w3authlogo} alt="web3Auth logo" />
        </div>
        <div>
          {isAuthenticating && <p className="green"> Authenticating ....</p>}
          {authError && (
            <p className="error">{JSON.stringify(authError.message)}</p>
          )}
          {isAuthenticated && (
            <div className="accountDetails">
              <h5>Account</h5>
              <p>{user?.attributes.accounts}</p>
            </div>
          )}
        </div>
        <div className="buttonCard">
          <button
            className="loginButton"
            onClick={isAuthenticated ? logout : handleCustomLogin}
          >
            {isAuthenticated ? "Sign Out" : "Connect to web3Auth"}
          </button>
        </div>
      </div>
      <div>
        For some reason, styling was hard, bear with me
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/0xPr0f/web3auth"
          >
            {" "}
            Link to the github
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
