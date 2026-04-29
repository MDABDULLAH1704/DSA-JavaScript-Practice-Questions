Backtracking means:
Make a choice
Go forward (recursion)
Undo the choice
Try another option

Maze Example: 
You try one path
If it’s blocked ❌ → you go back
Try another path
Repeat until exit is found
That “going back and trying again” = Backtracking

| Feature     | Recursion             | Backtracking          |
| ----------- | --------------------- | --------------------- |
| Definition  | Function calls itself | Recursion + undo      |
| Choices     | Usually one path      | Multiple paths        |
| Undo step   | ❌ No                 | ✅ Yes               |
| Goal        | Solve a problem       | Explore all solutions |
| Example     | Factorial, Fibonacci  | Subsets, Permutations |
| State reset | ❌ Not needed         | ✅ Required          |

All backtracking uses recursion, but not all recursion is backtracking.

Recursion is when a function calls itself to solve a smaller subproblem.

Backtracking is a special use of recursion where we explore all possibilities by making choices and undoing them.

