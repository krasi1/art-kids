
import "./App.css";
import MovieClip from "./assets/MovieClip";
import Header from './Header';

const App = () => {

  return (
    <>
    <Header />

      <MovieClip />

      <Footer />
    </>
  );
}

const Footer = () => {
  return (
    <div className="footer">
    </div>
  );
}

export default App;
