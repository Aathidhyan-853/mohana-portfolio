import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import ToolsKnown from "./components/ToolsKnown";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱️ 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <ToolsKnown /> 
      <Resume />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
