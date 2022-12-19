import { useState } from "react";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
      <Category />
    </div>
  );
}

export default App;
