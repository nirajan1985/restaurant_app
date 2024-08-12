import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  const [userName, setUserName] = useState(null);

  //authentication code
  useEffect(() => {
    // Make an api call to send username and password
    const data = {
      name: "Nirajan",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
