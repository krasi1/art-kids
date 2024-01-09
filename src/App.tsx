
import "./App.css";
import MovieClip from "./assets/MovieClip";

const App = () => {

  return (
    <>
      <div className="card">
      <MovieClip />
      </div>

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
