let myName: string = "Future Coder";
let characterLevel: number = 1;
let isAlive: boolean = true;

if (isAlive === true) {
    console.log("Hello, " + myName + "! The adventure continues! ⚔️");
} else {
    console.log("Game Over... 🪦");
}
function levelUp(currentLevel: number): number {
    let newLevel: number = currentLevel + 1;
    return newLevel;
}

// Now let's use it!
characterLevel = levelUp(characterLevel);
console.log(myName + " is now level " + characterLevel + "!");
for (let i = 0; i < 5; i++) {
    characterLevel = levelUp(characterLevel);
    console.log("Gained experience! Level is now: " + characterLevel);
}