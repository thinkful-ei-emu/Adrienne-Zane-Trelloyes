import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import List from './List.js';
import STORE from './store.js';

export default function App(props) {
  const firstListCards = STORE.lists[0].cardIds.map(card => (STORE.allCards[card]));
  const headerName=STORE.lists[0].header;
  return (
    <main>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {STORE.lists.map(list=>(
          <List 
          key={list.id}
          header={list.header}
          cards={list.cardIds.map(id=>STORE.allCards[id])}
        />
        ))}
        
      </div>
    </main>
  );
}
