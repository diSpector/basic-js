function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1;
    console.log('turns: ' + turns)
    // turnInSecods = BigInt(turnsSpeed);
    res1 = BigInt(turns) / BigInt(turnsSpeed);
    console.log('Div of BigInts: ' + res1);
    res2 = turns / turnsSpeed;
    console.log('Div of Numbers: ' + res2);
    res3 = res1 * BigInt(3600);
    console.log('BigInt * 3600 = ' + res3)
    res4 = res2 * 3600;
    console.log('Number * 3600 = ' + res4)
    res5 = Math.floor(res2) * 3600;
    console.log('floored: ' + res5)
    res6 = Math.round(res2) * 3600;
    console.log('rounded: ' + res6)
    res7 = Math.ceil(res2) * 3600;
    console.log('ceiled: ' + res7)
    // rrr = (BigInt(turns) / BigInt(turnsSpeed)) * BigInt(3600);
    // console.log('rrr: ' + rrr)

    let seconds = turns / turnsSpeed * 3600;

    return { turns, seconds }
}

// assert.deepEqual(calculateHanoi(414, 19279842), {turns: 4.230758200257591e+124, seconds: 7.899820714779368e+120});
// assert.deepEqual(calculateHanoi(736, 78853564), {turns: 3.6147378671465184e+221, seconds: 1.6502813140731933e+217});
// assert.deepEqual(calculateHanoi(243, 58252885), {turns: 1.4134776518227075e+73, seconds: 8.735223236689046e+68});


// console.log(calculateHanoi(736, 78853564))
console.log(calculateHanoi(243, 58252885))

// console.log(calculateHanoi(7, 10))
