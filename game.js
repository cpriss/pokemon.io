document.addEventListener('DOMContentLoaded', () => {
    const playerPokemon = {
        name: 'Pikachu',
        hp: 100,
        attack: 10
    };

    const opponentPokemon = {
        name: 'Charmander',
        hp: 100,
        attack: 8
    };

    const playerNameElement = document.getElementById('player-name');
    const playerHpElement = document.getElementById('player-hp');
    const opponentNameElement = document.getElementById('opponent-name');
    const opponentHpElement = document.getElementById('opponent-hp');
    const attackBtn = document.getElementById('attack-btn');

    playerNameElement.textContent = playerPokemon.name;
    playerHpElement.textContent = playerPokemon.hp;
    opponentNameElement.textContent = opponentPokemon.name;
    opponentHpElement.textContent = opponentPokemon.hp;

    attackBtn.addEventListener('click', () => {
        // Player attacks opponent
        opponentPokemon.hp -= playerPokemon.attack;
        if (opponentPokemon.hp < 0) opponentPokemon.hp = 0;

        // Opponent attacks player
        playerPokemon.hp -= opponentPokemon.attack;
        if (playerPokemon.hp < 0) playerPokemon.hp = 0;

        // Update the UI
        playerHpElement.textContent = playerPokemon.hp;
        opponentHpElement.textContent = opponentPokemon.hp;

        // Check for game over
        if (playerPokemon.hp === 0) {
            alert('You lose!');
            attackBtn.disabled = true;
        } else if (opponentPokemon.hp === 0) {
            alert('You win!');
            attackBtn.disabled = true;
        }
    });
});
