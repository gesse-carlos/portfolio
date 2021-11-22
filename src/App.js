import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiDownload } from "react-icons/fi";
import { SiCodewars } from "react-icons/si";
import Button from './components/Button';
import './App.css';

const buttonData = [
  {
    name: 'GitHub',
    src: '',
    icon: <FaGithub />,
  },
  {
    name: 'LinkedIn',
    src: '',
    icon: <FaLinkedin />,
  },
  {
    name: 'Email',
    src: '',
    icon: <FiMail />,
  },
  {
    name: 'Codewars',
    src: '',
    icon: <SiCodewars />,
  },
  {
    name: 'Baixe meu CV',
    src: '',
    icon: <FiDownload />,
  },
];

function App() {
  return (
    <div className="App">
      { buttonData.map((button) => (
        <Button
          name={ button.name }
          className="link-button"
          icon={ button.icon }
          src={ button.src }
        />
      ))}
    </div>
  );
}

export default App;
