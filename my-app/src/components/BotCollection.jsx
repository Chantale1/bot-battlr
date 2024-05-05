import React from "react";

function BotCollection({ onAddingBot, botsData }) {
    return (
        <div>
            <h1>My Bot Collection</h1>
            <ul>
                {botsData.map(bot => (
                    <li key={bot.id}>
                        <h2>{bot.name}</h2>
                        <img src={bot.avatar_url} alt={bot.name} />
                        <div>
                            <p>Health: {bot.health}</p>
                            <p>Attack: {bot.damage}</p>
                            <p>Defense: {bot.armor}</p>
                            <p>Type: {bot.bot_class}</p>
                            <p>Created: {bot.created_at}</p>
                            <p>Updated: {bot.updated_at}</p>
                        </div>
                        <button onClick={() => onAddingBot(bot)}>Deploy</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BotCollection;
