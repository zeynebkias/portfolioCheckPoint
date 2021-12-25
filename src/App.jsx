import "./App.css";
import { contact } from "./assets/data/contact";
import { skills } from "./assets/data/skills";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import img from "./assets/data/avatar.jpg";


function App() {
  return (
    <div>
      <Header name={contact.name} job={contact.job} />
      <Main image={img} alt={contact.avatar.alt} Coding={skills.Coding[0]}/>
      <Footer/>
    </div>
  );
}

export default App;
