import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiCodewars } from "react-icons/si";
import Button from './components/Button';
import Header from './components/Header';
import './App.css';

const buttonData = [
  {
    name: 'GitHub',
    src: 'https://github.com/gesse-carlos',
    icon: <FaGithub className="icon" />,
  },
  {
    name: 'LinkedIn',
    src: 'https://www.linkedin.com/in/gesse-carlos/',
    icon: <FaLinkedin className="icon" />,
  },
  {
    name: 'Codewars',
    src: 'https://www.codewars.com/users/gesse-carlos',
    icon: <SiCodewars className="icon" />,
  },
  {
    name: 'Medium',
    src: 'https://medium.com/@gesse.carlos',
    icon: <FaMedium className="icon" />,
  },
  {
    name: 'Email',
    src: 'mailto:gesse.carlos@outlook.com',
    icon: <FiMail className="icon" />,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="button-container">
        { buttonData.map((button, index) => (
          <Button
            name={ button.name }
            className="link-button"
            icon={ button.icon }
            src={ button.src }
            key={ index }
          />
        ))}
      </main>
    </div>
  );
}

export default App;
