class MathUtilities {


    add(baseValue, valueToAdd){
        let sum = baseValue + valueToAdd;
        return sum;
    }

    subtract(baseValue, valueToAdd){
        let sum = baseValue - valueToAdd;
        return sum;
    }

    divide(baseValue, valueToAdd){
        let sum = baseValue / valueToAdd;
        return sum;
    }

    multiply(baseValue, valueToAdd){
        let sum = baseValue * valueToAdd;
        return sum;
    }
}

module.exports = MathUtilities;