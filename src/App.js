import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AllQuran } from "./Pages/AllQuran";
import { Vaqt } from "./Pages/Vaqt";
import { Layout } from "./components/Layout/index";
import { Single } from "./Pages/Single";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<AllQuran />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/vaqt" element={<Vaqt />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
