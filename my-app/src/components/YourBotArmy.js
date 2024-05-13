mport React from "react";
import BotCard from "./BotCard";

function MyBotArmy({ bots, addBot }) {
  function showBots() {
    return bots.map((bot) => {
      return <BotCard key={bot.id} bot={bot} addBot={addBot} />;
    });
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">{showBots()}</div>
        <div className="row">Your Bot Army</div>
      </div>
    </div>
  );
}

export default MyBotArmy;

