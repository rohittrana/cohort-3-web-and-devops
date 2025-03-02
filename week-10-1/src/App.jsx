import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Blogs from "./Pages/Blogs";
import Content from "./Pages/Content";

import Nma from "./Nma";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nma></Nma>
        <Link to={"/blog-of-allen"}>
          <button>Blogs</button>
        </Link>
        <Link to={"/content"}>
          <button>Content</button>
        </Link>
        <Link to={"/"}>
          <button>Landing</button>
        </Link>
        <Routes>
          <Route path="/Blog-of-allen" element={<Blogs />} />

          <Route path="/content" element={<Content />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Landing() {
  return (
    <div style={{ color: "#dfe6e9", backgroundColor: "#d63031" }}>
      welcome to the landing page
      <Link to="/content">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default App;
