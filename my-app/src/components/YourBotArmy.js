import React from "react";

function MyBotArmy({ bots, releaseBot, dischargeBot }) {
    

    return (
        <div>
            <h2>The Customized Bot Forces</h2>
            <ul>
                { bots && bots.map((bot) => (
                    <li key={bot.id}>
                        <h2>{bot.name}</h2>
                        <img src={bot.avatar_url} alt={bot.name} />
                        <p>Health: {bot.health}</p>
                        <p>Damage: {bot.damage}</p>
                        <p>Armor: {bot.armor}</p>
                        <p>Class: {bot.bot_class}</p>
                        <p>Created At: {bot.created_at}</p>
                        <p>Updated At: {bot.updated_at}</p>
                        <button onClick={() => releaseBot(bot)}>Release from Service</button>
                        <button onClick={() => dischargeBot(bot)}>Discharge from Duty</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyBotArmy;
