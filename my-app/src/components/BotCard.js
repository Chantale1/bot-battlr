import React from "react";


const BotCard = ({ bot, handleClickEvent, handleDeleteAction }) => {
  // eslint-disable-next-line 
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
    <div className="bot-card-container">
      <div className="bot-card">
        <div className="bot-card-header">
          <span className="bot-card-name">{bot.name}</span>
          {botIcons[bot.bot_class] && (
            <i className={`bot-icon icon-${botIcons[bot.bot_class]}`} />
          )}
        </div>
        <div className="bot-card-image">
          <img alt="Bot avatar" src={bot.avatar_url} />
        </div>
        <div className="bot-card-details">
          <ul>
            <li><strong>Name:</strong> {bot.name}</li>
            <li><strong>Health:</strong> {bot.health}</li>
            <li><strong>Damage:</strong> {bot.damage}</li>
            <li><strong>Armor:</strong> {bot.armor}</li>
          </ul>
        </div>
        <button className="bot-delete-button" onClick={handleDelete}>Remove</button>
      </div>
    </div>
  );
};

export default BotCard;
