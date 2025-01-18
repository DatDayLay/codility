# codility
codility js test solution
# Problem Analysis:
We want to find the longest zigzag path that starts at the root of a binary tree. A zigzag is a path where the direction alternates between left and right at each step. For example:If you go left, the next step must go right to continue the zigzag.
The length of the zigzag is the number of turns (direction changes) in the path. If the path only has one edge or no turns, the length is 0.
# Approach:
Use Depth-First Search (DFS) to go through the tree one node at a time.

While exploring:

1. Keep track of the current direction (left or right) and the zigzag length.
At each step:
2. If you continue in the same direction, reset the zigzag length to 0 since there's no turn.
3. If you change direction, increase the zigzag length by 1.
4. Use a global variable (maxZigzag) to record the longest zigzag path found during the traversal.

# Steps Explanation:
# 1. Start at the Root:

i. Begin with the root of the tree and try going both left and right. Initialize the zigzag length as 0.

# 2. DFS Traversal:

i. Traverse the tree iteratively.

ii. At each node:
  a. If you move in the same direction as before (e.g., left to left or right to right), reset the zigzag length to 1.
  b. If you switch directions (e.g., left to right or right to left), add 1 to the zigzag length.
  
# 3. Track the Longest Path: 

i. As you calculate the zigzag lengths, compare them with the global maxZigzag variable and update it if the current zigzag is longer.

# 4. End Condition: 

i. If you reach a null node (end of a path), stop the recursion.
