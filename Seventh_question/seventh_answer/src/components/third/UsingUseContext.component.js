import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Component1() {
  const [user] = useState("Manthan Sankpal");
  
  function Component2() {
    return (
      <>
        <h4>Component 2</h4>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h4>Component 3</h4>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h4>Component 4</h4>
        <Component5 />
      </>
    );
  }
  
  function Component5() {
    const user = useContext(UserContext);
  
    return (
      <div id="reference">
        <h4>Component 5</h4>
        <h2>{`Hello ${user} again!`}</h2>
      </div>
    );
  }
  return (
    <UserContext.Provider value={user}>
      <h2>{`Hello ${user}!`}</h2>
      <Component2 />
    </UserContext.Provider>
  );
}



