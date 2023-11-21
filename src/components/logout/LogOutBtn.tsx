import { useState } from "react";


function LogOut () {
  const [logOut, setLogOut] = useState(false);

  const handleLogOut = () => {
    setLogOut(!logOut);
  }
  return (
    <button
      onClick={ handleLogOut  }
    >
      LogOut
    </button>
  );
}

export default LogOut;
