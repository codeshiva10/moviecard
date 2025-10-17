import "./App.css";
import Card from "../components/Card"
import Nabbar from "./Nabbar";
import MovieData from "../assets/data/Movies.json"
import Footer from "../components/Footer"

function App() {
  return (
    <>
      <div className="px-3">
        <Nabbar />
      </div>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        {MovieData.map((item, i) => {
          return (
            <Card
              key={i}
              name={item.name}
              image={item.image}
              releaseDate={item.releaseDate}
              plot={item.plot}
            />
          );
        })}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
export default App;
