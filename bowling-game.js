export const bowlingGameScore = (playerGameScore) =>
{
    let newStr = playerGameScore.replace(/-/g,"0");
    let nums1 = newStr.split(" ");
    let sum = nums1.reduce((acc, val) => {
        let nums = val.split("/");
        return acc + Number(nums[0]) + Number(nums[1]);
    }, 0);
    return sum;
    // let nums = nums1.split("/");
    // console.log(nums);
    // let score = 0;
    // // if (nums[0] !== "-" && nums[1] !== "-") {
    // //     score = Number(nums[0]) + Number(nums[1]);
    // // }
    // score = Number(nums[0]) + Number(nums[1]);
    // console.log(score);
    // if (nums[1] === "" && index < nums.length - 1) {
    //     let nextNums = nums[index + 1].split("/");
    //     score += Number(nextNums[0]);
    //     if (nextNums[1] === "") {
    //         let thirdNums = nums[index + 2].split("/");
    //         score += Number(thirdNums[0]);
    //     } else {
    //         score += Number(nextNums[1]);
    //     }
    // } else if (nums[1] === "" && index === nums.length - 1) {
    //     // last frame
    // } else if (score === 10 && nums[1] !== "") {
    //     let nextNums = nums[index + 1].split("/");
    //     score += Number(nextNums[0]);
    //     if (nextNums[1] !== undefined) {
    //         score += Number(nextNums[1]);
    //     }
    // }
    // return score;
};
