import React from "react";


const BotSpecs = ({ botData, clearSelection, enlistBot }) => {
  const botTypeIcon = (botClass) => {
    switch (botClass) {
      case "Assault":
        return <i className="bi bi-shield-check" />;
      case "Defender":
        return <i className="bi bi-shield" />;
      case "Support":
        return <i className="bi bi-ambulance" />;
      default:
        return null;
    }
  };

  const renderStats = () => {
    return (
      <div className="bot-stats">
        <div className="stat">
          <i className="bi bi-heart-fill text-danger"></i>
          <span>{botData.health}</span>
        </div>
        <div className="stat">
          <i className="bi bi-lightning-charge-fill text-warning"></i>
          <span>{botData.damage}</span>
        </div>
        <div className="stat">
          <i className="bi bi-shield-fill text-primary"></i>
          <span>{botData.armor}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bot-specs-container">
      <div className="bot-image">
        <img
          alt="Bot"
          className="bot-avatar"
          src={botData.avatar_url}
        />
      </div>
      <div className="bot-details">
        <h2 className="bot-name">{botData.name}</h2>
        <p className="bot-catchphrase">
          <strong>Catchphrase: </strong>
          {botData.catchphrase}
        </p>
        <div className="bot-class">
          <strong>Class: </strong>
          {botData.bot_class} {botTypeIcon(botData.bot_class)}
        </div>
        {renderStats()}
        <div className="bot-actions">
          <button className="btn btn-primary btn-action" onClick={clearSelection}>
            Go Back
          </button>
          <button className="btn btn-primary btn-action" onClick={() => enlistBot(botData)}>
            {botData.owned ? "Remove From Army" : "Enlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
