export const bowlingGameScore = (playerGameScore) =>
{
    let newStr = playerGameScore.replace(/-/g,"0");
    let nums1 = newStr.split(" ");
    
    let sum = nums1.map((val) => {
        let nums = val.split("/").map(Number);
        console.log(nums);
        let score = nums[0] + nums[1];
        return score;
    }).reduce((acc,val) => acc+val,0)
    
    //let ans = sum.reduce((acc,val) => acc+val,0);
    //console.log(sum, ans);
    return sum;
//let sum = nums1.reduce((acc, val, index, array) => {
  //  let nums = val.split("/").map(Number);
  //  console.log(nums);
    //let score = Number(nums[0]) + Number(nums[1]);
    //let score = nums[0] + nums[1];
    // if (score === 10 && index < array.length - 1) {
    //     let nextNums = array[index + 1].split("/");
    //     score += Number(nextNums[0]);
    //     if (nextNums[1] !== undefined && nextNums[1] !== "") {
    //         score += Number(nextNums[1]);
    //     } else if (nextNums[1] === "") {
    //         let thirdNums = array[index + 2].split("/");
    //         score += Number(thirdNums[0]);
    //     }
    // } else if (score === 10 && index === array.length - 1) {
    //     let nextNums = nums1[index + 1].split("/");
    //     if (nextNums[1] !== undefined && nextNums[1] !== "") {
    //         score += Number(nextNums[0]) + Number(nextNums[1]);
    //     } else if (nextNums[1] === "") {
    //         score += Number(nextNums[0]) + Number(nums[1]);
    //     }
    // }

   // return acc + score;
//}, 0);
};
