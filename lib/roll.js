
export function roll(sides, dice, rolls) {
    const results = [];
    for (let i = 0; i < rolls; i++) {
        let num = 1 + Math.floor(Math.random() * sides * dice)
        results[i] = num
    }
    
    let final = {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results
    }
    return final
}

