export function addKey(operations, currentKey) {
    let newOperations = operations;
    let currentOperation = 0;

    if (typeof currentKey === 'string' && (currentKey.toString().toUpperCase() === 'C' || currentKey.toString().toUpperCase() === 'ESCAPE')) {
        // clean the operations
        newOperations = [0];
        currentOperation = 0;
    } else {
        const lastKeyIndex = operations.length - 1;
        const lastKey = operations[lastKeyIndex];

        if (typeof currentKey === 'number') {
            // i'm trying to add a number
            if (typeof lastKey === 'number') {
                // last key was a number, so concat current key with last key
                // and replace last key with this new concated number
                currentOperation = operations[lastKeyIndex] = Number(`${lastKey}${currentKey}`);
            } else {
                // last key was an operation
                // so add this current key
                operations.push(currentKey);
                currentOperation = currentKey;
            }
        }
        else if (lastKey !== currentKey) { // avoid duplicate sequencial ops
            if (typeof lastKey === 'string') {
                // replace last op
                operations[lastKeyIndex] = currentKey;
            } else {
                operations.push(currentKey);
            }
        }

        const result = calculate(operations);

        if (typeof currentKey !== 'number') {
            currentOperation = result;
        }
    }

    return {
        newOperations,
        currentOperation
    };
}

export function calculate(operations) {
    if (!Array.isArray(operations)) {
        // return 0 if operations is not an array
        return 0;
    }

    let finalResult = 0;

    operations.forEach((op, idx) => {
        const prevValue = operations[idx - 1] || 0;
        const currValue = operations[idx];

        switch (prevValue) {
            case '+':
                finalResult += currValue;
                break;
            case '-':
                finalResult -= currValue;
                break;
            case '*':
                finalResult *= currValue;
                break;
            case '/':
                finalResult /= currValue;
                break;
            default:
                if (idx === 0 && typeof currValue === 'number') {
                    finalResult = currValue;
                }
            break;
        }
    });

    return finalResult;
}