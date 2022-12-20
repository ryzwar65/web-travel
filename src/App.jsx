import { useState } from "react";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Destination from "./pages/Destination";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
      <Category />
      <Destination />
    </div>
  );
}

export default App;
