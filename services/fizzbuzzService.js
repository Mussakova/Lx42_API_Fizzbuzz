let scoreNtrick = {score: 0, trick: ""};
class fizzbuzzService{
    static applyValidationInNumber(number){
        if(number %3 ===0 && number %5 ===0){
            scoreNtrick.trick = "FIZZBUZZ";
            scoreNtrick.score = number;
            return scoreNtrick;
        } 
        else if(number %5 === 0){
            scoreNtrick.trick = "BUZZ";
            scoreNtrick.score = number;
            return scoreNtrick;
        }
        else if(number %3 === 0){
            scoreNtrick.trick = "FIZZ";
            scoreNtrick.score = number;
            return scoreNtrick;
        } 
        else {
            scoreNtrick.trick = number;
            scoreNtrick.score = number;
            return scoreNtrick;
        }
        
    }
}

module.exports = fizzbuzzService;