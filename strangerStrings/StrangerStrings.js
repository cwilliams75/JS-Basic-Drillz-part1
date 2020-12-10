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
        let position;
        let length;

        if(input.length % 2 == 1) {
            position = input.length / 2;
            length = 1;
        } else {
            position = input.length / 2 - 1;
            length = 2;
        }

        return input.substring(position, position + length)

            }  

    getFirstWord(input){

        return input.substring(0, input.indexOf(' '));
        
        } 

         
    
    getSecondWord(spaceDelimnatedInput){
        return null;
    }
    
    reverse(input){
        return null;
    }
}

module.exports = StrangerStrings;