function roll(){
    const diceNum = document.getElementById("diceNum").value;
    const output = document.getElementById("output");
    const diceImages = document.getElementById("image_container");
    let values = [];
    let images = [];

    for(let counter = 0; counter < diceNum; counter++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src = "dice_images/${value}.png" width="200" height="150">`);
    }

    output.textContent = `Dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(' ');
}