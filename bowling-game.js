export const bowlingGameScore = (playerGameScore) =>

playerGameScore.replace(/-/g,"0").split(" ").map((val,index,arr) => {

    let nums = [];
    let score = 0;
    nums = val.split("/").map(Number);
    if(val.search("/") !== -1) 
        score = nums[0] + nums[1];
    else
        score = nums[0];
    if (index  < 10  ){
        if (score === 10) {
            if ((nums[1] === undefined))  { // strike
                    if (Number(arr[index+1]) !== 10) 
                        score += arr[index+1].replace(/-/g,"0").split("/").map(Number)[0] + arr[index+1].replace(/-/g,"0").split("/").map(Number)[1];
                    else {
                            score += 10; 
                            if(Number(arr[index+2]) !== 10)
                                score += arr[index+2].replace(/-/g,"0").split("/").map(Number)[0]; 
                            else
                                //console.log(score += 10);
                                score += 10;
                    }
                
            }  
            else //spare
                {   
                    console.log(Number(arr[index+1]));
                    if (!isNaN(arr[index+1])){
                        score += Number(arr[index+1]);
                        
                    } else
                        score += arr[index+1].replace(/-/g,"0").split("/").map(Number)[0];
                }
        }
    }
    return score;
}).reduce((acc,val) => (acc+val),0);

