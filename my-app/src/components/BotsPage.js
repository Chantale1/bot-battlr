import React, { useState, useEffect } from "react";
import MyBotArmy from "./MyBotArmy";
import BotSearch from "./BotSearch";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

const BotsPage = () => {
  const [allBots, setAllBots] = useState([]);
  const [selectBot, setSelectBot] = useState(null);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await fetch('https://bot-battlr-data-0cjn.onrender.com/bots');
      const data = await response.json();
      const bots = data.map(bot => ({ ...bot, owned: false }));
      setAllBots(bots);
    } catch (error) {
      console.error('Error fetching bots:', error);
    }
  };

  const clickBot = (bot) => setSelectBot(bot);

  const handleInput = (event) => console.log("Input value:", event.target.value.toLowerCase());
  
  const clearSelection = () => setSelectBot(null);

  return (
    <div className="container">
      <BotSearch handleInput={handleInput} clearSelection={clearSelection} />
      <br />
      <MyBotArmy bots={allBots} selectBot={clickBot} />
      <br />
      <BotCollection bots={allBots} selectBot={clickBot} />
      <br />
      {selectBot && (
        <BotSpecs bot={selectBot} clearSpec={clearSelection} addBot={() => {}} />
      )}
    </div>
  );
};

export default BotsPage;


