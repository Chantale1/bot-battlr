import React, { useState, useEffect } from "react";
import MyBotArmy from "./MyBotArmy";
import BotCollection from "./BotCollection";

function BotPage() {
  const [BotData, setBotData] = useState([]);

  function fetchData() {
    return fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then((data) => {
        setBotData(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function enlistbot(bot) {
    setBotData(
      botData.map((r) => (r.id === bot.id ? { ...r, enlisted: true } : r))
    );
  }

  function releasebot(bot) {
    setbotData(
      botData.map((r) => (r.id === bot.id ? { ...r, enlisted: false } : r))
    );
  }

  function removebot(bot) {
    const updatedBotData = botData.filter((r) => r.id !== bot.id);
    setBotData(updatedBotData);
  }

  return (
    <div>
      <MyArmy
        bots={botData.filter((r) => r.enlisted)}
        releaseBot={releaseBot}
        removeBot={removeBot}
      />
      <BotCollection
        bots={botData}
        enlistBot={enlistBot}
        removeBot={removeBot}
      />
    </div>
  );
}

export default BotSPage;

