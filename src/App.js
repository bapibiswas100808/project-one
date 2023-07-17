import "./App.css";
import Another from "./Components/Another/Another";
import Footer from "./Components/Footer/Footer";
import Heritage from "./Components/Heritage/Heritage";
import Hero from "./Components/Hero/Hero";
import Message from "./Components/Message/Message";
import Project from "./Components/Project/Project";
import Utility from "./Components/Utility/Utility";
import Value from "./Components/Value/Value";

function App() {
  return (
    <div className="App">
      <Hero />
      <Project />
      <Value />
      <Utility />
      <Heritage />
      <Another />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
