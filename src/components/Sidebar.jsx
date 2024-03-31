import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
//import "./Sidebar.css"

function Sidebar() {

  const [fontSize, setFontSize] = useState(16);
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.fontFamily = selectedFont;
    document.body.style.backgroundColor = isDarkMode ? '#222' : '#fff';
    document.body.style.color = isDarkMode ? '#fff' : '#222';
  }, [fontSize, selectedFont, isDarkMode]);

  const handleFontSizeChange = (event) => {
    setFontSize(parseInt(event.target.value));
  };
  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (    
  <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark col-md-3">
    <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
        Home
        </a>
    </li>
    <li>
        <a href="#" className="nav-link text-white">
        My Bookmarks
        </a>
    </li>
    </ul>

    <div className="">
        <strong>Settings</strong>
          <br/>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              checked={isDarkMode}
              onChange={handleDarkModeToggle}
            />
            <label className="form-check-label" htmlFor="darkModeSwitch"> Dark Mode</label>
          </div>

        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item"><a className="nav-link text-white" href="#">Font</a></li>

            <select className="form-select" onChange={handleFontChange} value={selectedFont}>
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Tahoma">Tahoma</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
            </select>

            <li className="nav-item"><a className="nav-link text-white" href="#">Font Size</a></li>

            <input type="range" className="form-range"
            min="12" max="32" step="1" value={fontSize} onChange={handleFontSizeChange} />
        </ul>
    </div>
  </div>
  )
}

export default Sidebar
