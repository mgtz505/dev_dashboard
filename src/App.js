import './App.css';
import Header from "./components/Header"
import HQ from "./components/HQ"
import News from "./components/News"


console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
    <div className="App">
      <Header />
      <HQ />
      <News />
    </div>
  );
}

export default App;
