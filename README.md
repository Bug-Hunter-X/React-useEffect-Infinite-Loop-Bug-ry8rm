# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by including the state variable in the dependency array.  The `bug.js` file shows the incorrect implementation. The `bugSolution.js` file provides the corrected version.

## Bug
The bug is in the `useEffect` hook.  The state variable `count` is updated within the effect function and this variable is also present in the dependency array. This leads to an infinite loop, causing the application to crash or become unresponsive.  This is because every time `setCount` is called, the `useEffect` hook is triggered again, causing another update of the `count` and thus the loop continues. 

## Solution
The solution involves removing the `count` variable from the dependency array. If there is no dependency that changes, then there is no need for the useEffect to fire again.