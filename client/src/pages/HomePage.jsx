import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const handleJoinRoom = () => {
        const roomId = prompt('Enter Room ID:');
        if (roomId) {
            navigate(`/room/${roomId}`);
        }
    };

    return (
        <div>
            <h1>Welcome to the Quiz Game</h1>
            <button onClick={handleJoinRoom}>Join Room</button>
        </div>
    );
}

export default HomePage;
