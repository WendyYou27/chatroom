import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path=""></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
