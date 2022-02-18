import * as React from 'react';
import './css/style.css';
import Header from './components/header';
import CardList from "./components/cardList";

function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
}

export default App;
