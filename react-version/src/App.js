import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetList from './components/Tweet-list';
import TweetForm from './components/Tweet-form';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Profile></Profile>
      <main className="container">
      <TweetForm></TweetForm>
      <TweetList></TweetList>
      </main>
    </div>
  );
}

export default App;
