import {bowlingGameScore} from "./bowling-game.js";
    
//   game is 10 frames of 2 rolls
// the bowler has to knock all 10 to then be given option of extra scores depending on
//   a spare if in 2 rolls  score is 10 + next roll
// strike is all pins knocked down in one roll gives you 10+ score of next 2 rolls
// on last throw if spare or strike bowler has one or two extra rolls .
//   all gutter roll would be "-/- -/-" ... for 10 frames give zero score
//    all 1's gives 20 as a score
//  5/5 3/- will give socre 16 because adding 3 to 10 then the actual roll
//  10/-  1/1 12 because adding next two rolls and then 2 so 14 in total
// full strikes will give score of 300.
    describe("Gives player score for a bowling game", ()=>{
        test("gives 0 score for all gutter rolled game for player" , ()=>{
            expect(bowlingGameScore("-/- -/- -/- -/- -/- -/- -/- -/- -/- -/-")).toBe(0);
        });
        test("gives 20 score for all 1's rolled game for player" , ()=>{
            expect(bowlingGameScore("1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1")).toBe(20);
        });
        test("scores if spare + next roll" , ()=>{
            expect(bowlingGameScore("6/4 3/- -/- -/- -/- -/- -/- -/- -/- -/-")).toBe(16);
        });
    });

    