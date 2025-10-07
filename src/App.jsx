import "./App.css";
import Card from "./components/card";
import MovieData from "./data/Movies.json";
import Nabbar from "./Nabbar";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <> 
 <div className="px-3">
  <Nabbar/>
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
        <Footer/>
      </div>
  
 
</>
  );
}
export default App;
