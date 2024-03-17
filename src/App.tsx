import { Outlet } from "react-router-dom";

import Footer from "components/Footer";
import Header from "components/Header";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
