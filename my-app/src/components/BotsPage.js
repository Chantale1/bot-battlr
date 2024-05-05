import React, { useState, useEffect } from "react";
import MyBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotPage() {
  const [botsData, setBotData] = useState([]);

  function fetchData() {
    return fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then((data) => {
        setBotsData(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function enlistbot(bot) {
    setBotsData(
      botsData.map((r) => (r.id === bot.id ? { ...r, enlisted: true } : r))
    );
  }

  function releasebot(bot) {
    setbotsData(
      botsData.map((r) => (r.id === bot.id ? { ...r, enlisted: false } : r))
    );
  }

  function removebot(bot) {
    const updatedBotsData = botsData.filter((r) => r.id !== bot.id);
    setBotsData(updatedBotsData);
  }

  return (
    <div>
      <MyArmy
        bots={botsData.filter((r) => r.enlisted)}
        releaseBot={releaseBot}
        removeBot={removeBot}
      />
      <BotCollection
        bots={botsData}
        enlistBot={enlistBot}
        removeBot={removeBot}
      />
    </div>
  );
}

export default BotsPage;

