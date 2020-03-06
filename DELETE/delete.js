function transform(arr) {
    if (!(arr && typeof arr === 'object' && arr.constructor === Array)) {
        throw Error;
    }

    if (arr.length == 0) {
        return [];
    }

    let transformedArr = [];
    const flags = [
        '--discard-next',
        '--discard-prev',
        '--double-next',
        '--double-prev',
    ];

    // arr.forEach((cur, i, array) => {
    //     if (flags.includes(cur)) {
    //         switch (cur) {
    //             case '--discard-next':
    //                 // array.pop();
    //                 // delete array[i+1];
    //                 i++;
    //                 break;
    //             case '--discard-prev':
    //                 transformedArr.pop();
    //                 break;
    //             case '--double-next':
    //                 if (typeof array[i+1] !== 'undefined'){
    //                     transformedArr.push(array[i+1]);
    //                 }
    //                 break;
    //             default: // -- double-prev
    //                 if (typeof array[i-1] !== 'undefined'){
    //                     transformedArr.push(array[i-1]);
    //                 }
    //                 break;
    //         }
    //     } else {
    //         transformedArr.push(cur)
    //     }
    // });
    let missOne = false;
    arr.forEach((cur, i, array) => {
        // missOne = false;
        if (flags.includes(cur)) {
            switch (cur) {
                case '--discard-next':
                    missOne = true;
                    // array.pop();
                    // delete array[i+1];

                    break;
                case '--discard-prev':
                    transformedArr.pop();
                    break;
                case '--double-next':
                    if (typeof array[i+1] !== 'undefined'){
                        transformedArr.push(array[i+1]);
                    }
                    break;
                default: // -- double-prev
                    if (typeof array[i-1] !== 'undefined'){
                        transformedArr.push(array[i-1]);
                    }
                    break;
            }
        } else {
            if (!missOne){
                transformedArr.push(cur)
            } else {
                missOne = false;
            }
            // transformedArr.push(cur)
        }
    });

    return transformedArr;
};

console.log(
    transform([
        '--discard-next', 333,
        '--discard-next', 0,
        '--double-next',  'GHI',
        '--discard-prev', 3.14,
        '--discard-next', 1,
        'DEF',            0,
        'DEF',            1.233,
        '--double-next'
      ])
);

// console.log(transform(['--double-prev', NaN, '--discard-next', {name: 'john'}, NaN, '--discard-next']));

// console.log(transform(
// [
//     '--discard-next', 22,
//     '--double-prev',  3.14,
//     '--double-next',  'DEF',
//     '--double-prev',  3.14,
//     '--double-prev',  1,
//     3.14,             22,
//     '8.963',          false,
//     '--double-prev'
//   ]
// ));