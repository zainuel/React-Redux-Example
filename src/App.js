import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/Postform'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <PostForm />
        <hr />
        <Posts />
      </header>
    </div>
  );
}

export default App;
