import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import List from './List.js';
import STORE from './store.js';

export default function App(props) {
  const firstListCards = STORE.lists[0].cardIds.map(card => (STORE.allCards[card]));
  console.log(STORE.lists.header.map(header => (STORE))
  return (
    <main>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        <List header="" cards={firstListCards} />
      </div>
    </main>
  );
}
