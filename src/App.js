import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ChevronLeft } from "@mui/icons-material";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div className="header">
        <div className="brand">Brand Name</div>
        <div className="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ChevronLeft /> : <MenuIcon />}
        </div>
        <div className="header-title">Header</div>
      </div>
      <div className="container">
        <aside className={`${isOpen && "open"} drawer`}>Drawer</aside>
        <main className="main">Content</main>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
