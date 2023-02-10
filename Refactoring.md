# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Since the idea was to return this partition key or create a new one
- I started by adding unit tests to make sure the function works as expected.
- I used jest to write the tests. I used the `describe` and `it` functions to group the tests. I used the `expect` function to make assertions about the function's output. I used the `toBe` function to make sure the output is equal to the expected value. I used the `toEqual` function to make sure the output is equal to the expected value. I used the `toThrow` function to make sure the function throws an error when the input is invalid.
- then i wrote comments about this function just to make sure i understand what it does and what it's supposed to do
- then i started refactoring the function to make it more readable
- I removed the unnecessary `if` statement
- I removed the unnecessary `else` statement
- I removed TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH unnecessary
- directly check if event is null or undefined then returns immediately 0
- using recursion to get the partition key and return it
