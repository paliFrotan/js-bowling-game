export const bowlingGameScore = (playerGameScore) =>
{
    
    let sum = playerGameScore.replace(/-/g,"0").split(" ").map((val,index,arr) => {
        // check for 10 
        let nums = val.split("/").map(Number);
        let score = nums[0] + nums[1];
        if (score === 10){
            score += arr[index+1].split("/").map(Number)[0];
        }
        return score;
    }).reduce((acc,val) => acc+val,0)
   
    return sum;
};
