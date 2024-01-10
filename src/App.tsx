import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AppRoutes from "./Routes";
import Footer from "./assets/Footer";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <AppRoutes />
        <Footer />
      </>
    </Router>
  );
};

export default App;
