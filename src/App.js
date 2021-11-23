import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiCodewars } from "react-icons/si";
import Button from './components/Button';
import Header from './components/Header';
import './App.css';

const buttonData = [
  {
    name:
      <a
        href="https://github.com/gesse-carlos"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>,
    icon: <FaGithub className="icon" />,
  },
  {
    name:
      <a
        href="https://www.linkedin.com/in/gesse-carlos/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>,
    icon: <FaLinkedin className="icon" />,
  },
  {
    name:
      <a
        href="https://www.codewars.com/users/gesse-carlos"
        target="_blank"
        rel="noreferrer"
      >
        Codewars
      </a>,
    icon: <SiCodewars className="icon" />,
  },
  {
    name:
      <a
        href="https://medium.com/@gesse.carlos"
        target="_blank"
        rel="noreferrer"
      >
        Medium
      </a>,
    icon: <FaMedium className="icon" />,
  },
  {
    name:
      <a
        href="mailto:gesse.carlos@outlook.com"
        target="_blank"
        rel="noreferrer"
      >
        Email
      </a>,
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
            type={ button.name !== 'Baixe meu CV' ? "button" : "download"}
            name={ button.name }
            className="link-button"
            icon={ button.icon }
            key={ index }
          />
        ))}
      </main>
    </div>
  );
}

export default App;
