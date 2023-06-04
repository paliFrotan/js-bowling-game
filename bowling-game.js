export const bowlingGameScore = (playerGameScore) =>

playerGameScore.replace(/-/g,"0").split(" ").map((val,index,arr) => {

    let nums = [];
    let score = 0;
    if(Number(val) !== [10]) {
        nums = val.split("/").map(Number);
        if (nums[1] === undefined)
            score = nums[0];
        else 
            score = nums[0] + nums[1];
    }
    if (score === 10) {
        if ((nums[1] === undefined))  {
            if(!(arr[index+1] === undefined) && Number(arr[index+1]) !== 10) 
                score += arr[index+1].replace(/-/g,"0").split("/").map(Number)[0] + arr[index+1].replace(/-/g,"0").split("/").map(Number)[1];
            
        }  
        else //spare
            score += arr[index+1].replace(/-/g,"0").split("/").map(Number)[0];
    }
    return score;
}).reduce((acc,val) => (acc+val) === 120? 300: acc+val,0);