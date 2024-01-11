import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import AppRoutes from "./Routes";

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
