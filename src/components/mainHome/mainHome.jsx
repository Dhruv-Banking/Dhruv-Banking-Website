import "./mainHome.css";

import Grey from "../../assets/grey.png";

function MainHome() {
  return (
    <>
      <main>
        <div className="DHB__Main">
          <div className="DHB__Main-Left">
            <h2>Welcome to Dhruv Banking!</h2>
            <p>
              Dhruv Banking is a web application that allows you to manage your
              bank account. You can create an account, login, and manage your
              account.
              <strong>
                Please note that all the images to my knowledge are Copyright
                free, and also this website is NOT A BANK, this is for a
                Computer Science assesment. I am not liable for any legal stuff
                :3
              </strong>
            </p>
          </div>
          <div className="DHB__Main-Right">
            <img className="DHB__Main-Grey1" src={Grey} alt="grey box" />
            <img className="DHB__Main-Grey2" src={Grey} alt="grey box" />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainHome;
