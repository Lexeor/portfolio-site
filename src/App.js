import React, {useContext} from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { MainContext } from './components/mainContext';

export default function App() {
  const context = useContext(MainContext);
  console.log('context', context);

  return (
      <div className="App">
        <Header />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
  );
}