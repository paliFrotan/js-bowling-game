export const bowlingGameScore = (playerGameScore) =>
{
    let newStr = playerGameScore.replace(/-/g,"0");
    let nums1 = newStr.split(" ");
    
    let sum = nums1.map((val,index) => {
        let nums = val.split("/").map(Number);
        console.log(nums);
        let score = nums[0] + nums[1];
        if (score === 10){
            let nums2 = nums1[index+1].split("/").map(Number);
            score += nums2[0];
        }
        return score;
    }).reduce((acc,val) => acc+val,0)
   
    return sum;

};
