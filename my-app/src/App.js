import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection'
import './App.css';
import MyBotArmy from './components/YourBotArmy';

function App() {
  const [allBots, setAllBots] = useState([]);
  const [chosenBots, setChosenBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) =>
        setAllBots(data)
      )
      .catch((error) => console.error(error));
  }, []);

  function addBot(bot) {
    if (!chosenBots.some((b) => b.id === bot.id)) {
      setChosenBots([...chosenBots, bot]);
    }
  }

  function removeBot(bot) {
    const updatedBots = chosenBots.filter((b) => b.id !== bot.id);
    setChosenBots(updatedBots);
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        const updatedAllBots = allBots.filter((b) => b.id !== bot.id);
        setAllBots(updatedAllBots);
        removeBot(bot);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="App">
      <BotCollection allBots={allBots} onAddBot={addBot} />
      <MyBotArmy chosenBots={chosenBots} onRemoveBot={removeBot} onDischargeBot={dischargeBot} />
    </div>
  );
}

export default App;
