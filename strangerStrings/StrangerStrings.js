class StrangerStrings {

    getHelloWorld() {
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment) {
        return firstSegment + secondSegment;
    }

    getPrefix(input) {
        let prefix = input.substring(0, 3);
        return prefix;
    }

    getSuffix(input) {
        let suffix = input.substring(input.length - 3);
        return suffix;
    }

    getMiddleCharacter(input) {
        let middle = Math.floor(input.length / 2);
        console.log(middle);
        return input[middle];
    }

    getFirstWord(input) {
        let firstWord = input.substring(0, input.indexOf(' '));
        console.log(firstWord);
        return firstWord;
    }

    getSecondWord(spaceDelimnatedInput) {
        let second = spaceDelimnatedInput.split(" ");
        return second[1];

    }

    reverse(input) {
        let reverse = ''
        for (let i = input.length - 1; i >= 0; i--) {
            reverse += input[i]
        }
        return reverse
    }
}

module.exports = StrangerStrings;