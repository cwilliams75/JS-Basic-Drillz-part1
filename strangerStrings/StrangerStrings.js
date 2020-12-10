class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
           
        return firstSegment + secondSegment;
    }

    getPrefix(input){
      
        return input.substring(0,3);
    }

    getSuffix(input){
        return input.substring(input.length -3);
    }

    getMiddleCharacter(input){
        return null;
    }

    getFirstWord(input){
        return null;
    }
    
    getSecondWord(spaceDelimnatedInput){
        return null;
    }
    
    reverse(input){
        return null;
    }
}

module.exports = StrangerStrings;