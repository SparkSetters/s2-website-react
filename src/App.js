import './App.scss';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Stack from "./Components/Stack";
import Presence from "./Components/Presence";
import Stats from "./Components/Stats";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
    return (<div className="App">
        <Header/>
        <Hero/>
        <Stack/>
        <Presence/>
        <Stats/>
        <Services/>
        {/* <Projects/> */}
        <Contact/>
        <Footer/>
    </div>);
}

export default App;
