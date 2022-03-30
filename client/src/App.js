import "./App.css";
import Nav from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Signup from "./component/Signup";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Products Page</h1>} />
        <Route path="/add" element={<h1>Add the Products Page</h1>} />
        <Route path="/update" element={<h1>Update the Products Page</h1>} />
        <Route path="/logout" element={<h1>Logut from the Products Page</h1>} />
        <Route path="/profile" element={<h1>Profile Pages Page</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>Page 404 Not found !!!</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
