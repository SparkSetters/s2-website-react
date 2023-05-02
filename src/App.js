import './App.scss';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Stack from "./Components/Stack";
import Presence from "./Components/Presence";
import Stats from "./Components/Stats";

function App() {
    return (<div className="App">
        <Header/>
        <Hero/>
        <Stack/>
        <Presence/>
        <Stats/>
    </div>);
}

export default App;
