import "./App.css";
import { useMoralis } from "react-moralis";

function App() {
  const {
    isAuthenticated,
    authError,
    isAuthenticating,
    logout,
    Moralis,
    user,
  } = useMoralis();

  const handleCustomLogin = async () => {
    await Moralis.authenticate({
      provider: "web3Auth",
      clientId:
        "BCCTJda96zeSqqYmB1ADCE_-wOQSfXp9-UbMqegE9A8-5AcdvftQgHphqDYtOWjvl5bqRocRYH5B394XOwT3Nr4",
    });
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className="backgroundParent">
          <div className="App">
            <div>Test web3Auth x Moralis</div>
            <div>
              {isAuthenticating ? (
                <p className="green"> It seems to be working</p>
              ) : (
                ""
              )}
              {authError && (
                <p className="error">{JSON.stringify(authError.message)}</p>
              )}
            </div>
            <div className="buttonCard">
              <button className="loginButton" onClick={handleCustomLogin}>
                Connect to web3Auth
              </button>
            </div>
          </div>
          <div>
            For some reason, styling was hard, bear with me
            <div>
              <a _blank="" href="https://github.com/0xPr0f/web3auth">
                {" "}
                Link to the github
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="backgroundParent">
          <div className="App">
            <div>Welcome to your account</div>
            <div className="">
              <h5>Account</h5>
              <p>{user?.attributes.accounts}</p>
            </div>
            <div className="buttonCard">
              <button className="loginButton" onClick={logout}>
                Sign Out
              </button>
            </div>
          </div>
          <div>
            For some reason, styling was hard, bear with me
            <div>
              <a target="_blank" href="https://github.com/0xPr0f/web3auth">
                {" "}
                Link to the github
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
