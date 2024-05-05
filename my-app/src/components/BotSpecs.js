import React from "react";

const robotTypeIcons = {
  Assault: "military",
  Defender: "shield",
  Support: "plus circle",
  Medic: "ambulance",
  Witch: "magic",
  Captain: "star",
};

function BotSpecs({ bot }) {
  return (
    <div className="bot-info">
      <div className="ui segment">
        <div className="ui two column stackable grid">
          <div className="ui column">
            <img
              alt="Robot avatar"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="ui column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class}
              <i className={`icon ${robotTypeIcons[bot.bot_class]}`} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column grid">
                <div className="column">
                  <i className="icon large circular red heartbeat" />
                  <strong>Health: {bot.health}</strong>
                </div>
                <div className="column">
                  <i className="icon large circular yellow lightning" />
                  <strong>Damage: {bot.damage}</strong>
                </div>
                <div className="column">
                  <i className="icon large circular blue shield" />
                  <strong>Armor: {bot.armor}</strong>
                </div>
              </div>
            </div>
            <div className="ui buttons">
              <button
                className="ui button"
                onClick={() =>
                  console.log("Implement function to go back")
                }
              >
                Go Back
              </button>
              <div className="or"></div>
              <button
                className="ui primary button"
                onClick={() =>
                  console.log("Implement function to enlist bot")
                }
              >
                Enlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
