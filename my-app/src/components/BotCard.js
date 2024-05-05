import React from "react";

const BotCard = ({ bot, handleClickEvent, handleDeleteAction }) => {
  const handleClick = () => handleClickEvent(bot);
  const handleDelete = (event) => {
    event.stopPropagation();
    handleDeleteAction(bot);
  };

  const botIcons = {
    Assault: "military",
    Defender: "shield",
    Support: "plus circle",
    Medic: "ambulance",
    Witch: "magic",
    Captain: "star",
  };

  return (
    <div className="bot-card">
      <div className="bot-card__image">
        <img alt="Bot avatar" src={bot.avatar_url} />
      </div>
      <div className="bot-card__content">
        <div className="bot-card__header">
          <span>{bot.name}</span>
          {botIcons[bot.bot_class] && (
            <i className={`bot-card__icon icon-${botIcons[bot.bot_class]}`} />
          )}
        </div>
        <ul className="bot-card__details">
          <li>Name: {bot.name}</li>
          <li>
            <i className="bot-card__stat-icon icon-heartbeat" />
            Health: {bot.health}
          </li>
          <li>
            <i className="bot-card__stat-icon icon-lightning" />
            Damage: {bot.damage} 
          </li>
          <li>
            <i className="bot-card__stat-icon icon-shield" />
            Armor: {bot.armor} 
          </li>
        </ul>
      </div>
      <button className="bot-card__delete" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
};

export default BotCard;
