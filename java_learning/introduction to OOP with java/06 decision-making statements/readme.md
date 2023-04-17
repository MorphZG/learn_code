# Decision-making statements

In this module, you'll learn how to write dynamic programs that contain multiple execution paths.

In our current programs, the flow of statement execution has been quite static. At runtime, Java starts at the main method and executes the matching bytecode of the first written statement and then moves on to the bytecode of the immediate next statement and so on. This sequential pattern goes on through the rest of the method and ends at the last statement's bytecode without deviation.

While this kind of flow works for a wide range of programming tasks, it limits what we can do computationally. It cannot, for example, even allow our FahrenheitToCelsius program to do something as simple as print a certain message if a converted temperature is above a particular value or print a different message if the temperature is below that threshold.

In this module, you'll learn how to write programs that contain multiple execution paths at different points during runtime. To achieve this dynamic behavior, we'll use the following three kinds of statements that allow us to control the flow of program execution: the if, if-else, and switch statements. Collectively, they are called decision-making statements because they work by tying the execution of a block of code with an evaluation of one or more specified conditions. They are also commonly called conditional statements given that last caveat.

## The if statement

```java
if (boolean expression) {
  statement 01  
}

```
