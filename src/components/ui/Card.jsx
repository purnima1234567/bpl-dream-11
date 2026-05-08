import React, { useState } from 'react';
import { FaUser, FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({
    player,
    setCoin,
    coin,
    setSelectedPlayers,
    selectedPlayers
}) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {

        // already selected check
        const alreadySelected = selectedPlayers.find(
            p => p.playerName === player.playerName
        );

        if (alreadySelected) {
            toast.error("Player already selected");
            return;
        }

        // coin check
        let newCoin = coin - player.price;

        if (newCoin < 0) {
            toast.error("Not enough coin to purchase this player");
            return;
        }

        // update state
        setCoin(newCoin);

        setSelectedPlayers([...selectedPlayers, player]);

        setIsSelected(true);

        toast.success(`${player.playerName} is selected`);
    };

    return (
        <div className="card bg-base-100 shadow-sm">

            <figure>
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                />
            </figure>

            <div className="card-body">

                <h2 className="card-title flex items-center gap-2">
                    <FaUser />
                    {player.playerName}
                </h2>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <FaFlag />
                        <p>{player.playerCountry}</p>
                    </div>

                    <button className='btn'>
                        {player.playerType}
                    </button>
                </div>

                <div className='divider'></div>

                <h2 className='font-bold'>
                    Rating ({player.rating})
                </h2>

                <div className='flex justify-between font-bold'>
                    <p>{player.battingStyle}</p>
                    <p>{player.bowlingStyle}</p>
                </div>

                <div className="card-actions justify-between items-center mt-3">

                    <p className='font-semibold'>
                        Price: ${player.price}
                    </p>

                    <button
                        className="btn"
                        onClick={handleChoosePlayer}
                        disabled={isSelected}
                    >
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Card;