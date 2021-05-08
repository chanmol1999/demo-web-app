import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Logo from "./components/Logo";
import MainTitle from "./components/MainTitle";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainTitle />
      <ImageSlider />
      <Logo />
    </div>
  );
}

export default App;
