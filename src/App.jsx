import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";

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
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default App;
