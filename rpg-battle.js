// project:The Terminal-Based RPG Battle Simulator.

const player = {
    name: "Hero",
    hp: 100,
    attack: 25,
    defense: 5
};

const monster = {
    name: "Goblin King",
    hp: 80,
    attack: 18,
    defense: 3
};

function startBattle(p , m){
    let round = 1;
    while(p.hp > 0 && m.hp >0){
        let playerRewDamage = Math.floor(Math.random() * p.attack) +1;
        let playerFinalDamage = playerRewDamage -m.defense;
        if(playerFinalDamage < 0){
        playerFinalDamage = 0;
      }
         m.hp -= playerFinalDamage;
         console.log(`${p.name} attacks ${m.name} for ${playerFinalDamage} damage! ${m.name} has ${m.hp} HP left.`);
         
         if(m.hp <= 0){
            break;
         }
         let monsterRewDamage = Math.floor(Math.random()*m.attack) +1;
         let monsterFinalDamage = monsterRewDamage - p.defense;
         if(monsterFinalDamage <0){
            monsterFinalDamage = 0;
         }
         p.hp -= monsterFinalDamage;
         console.log(`${m.name} attacks ${p.name} for ${monsterFinalDamage} damage! ${p.name} has ${p.hp} HP left.`);

    round++;
    }
    console.log(`\n=== BATTEL OVER ===`);
    if(p.hp > 0){
        console.log(`${p.name} wins the battle!`)
    }else{
        console.log(`${m.name} wins... game over!!`)
    }
}

startBattle(player, monster);