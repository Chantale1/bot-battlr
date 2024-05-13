import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, addBot }) => {
  return (
    <div className="container">
      <h1>My Bot Collection</h1>
      <div className="d-flex flex-row flex-wrap justify-content-start">
        {bots.map(bot => (
              <div className="p-2" key={bot.id} style={{ minWidth: "200px" }}>
              <BotCard bot={bot} addBot={addBot} />
        
            <div className="card">
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Attack: {bot.damage}</p>
                <p className="card-text">Defense: {bot.armor}</p>
                <p className="card-text">Type: {bot.bot_class}</p>
                <p className="card-text">Created: {bot.created_at}</p>
                <p className="card-text">Updated: {bot.updated_at}</p>
                <button className="btn btn-primary" onClick={() => addBot(bot)}>Deploy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
