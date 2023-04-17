# Exercise 1: Rewrite your pay computation to give the employee 1.5 times the hourly rate for hours worked above 40 hours.

hours = int(input("Enter Hours: "))
rate = int(input("Enter Rate: "))
if hours > 40:
    hours *= 1.5
    pay = hours * rate
    print(hours)
else:
    pay = hours * rate

print(f"Your pay is: {pay}")

# Exercise 2: Rewrite your pay program using try and except so that your program
# handles non-numeric input gracefully by printing a message and exiting the program.
# The following shows two executions of the program:

hours = input("Enter Hours: ")
rate = input("Enter Rate: ")

try:
    hours = int(hours)
    rate = int(rate)
    if  hours > 40:
        hours *= 1.5
        pay = hours * rate
    else:
        pay = hours * rate

    print(f"Your pay is: {pay}")

except (ValueError, TypeError):
    print("Please enter numeric value.")

# Exercise 3: Write a program to prompt for a score between 0.0 and 1.0.
# If the score is out of range, print an error message.
# If the score is between 0.0 and 1.0, print a grade A, B, C, D, F

prompt = "Enter a score between 0.0 and 1.0:\n"
score = float(input(prompt))

if 0.0 < score < 1.0:
    if score >= 0.9:
        print("grade: A")
    elif score >= 0.8:
        print("grade: B")
    elif score >= 0.7:
        print("grade: C")
    elif score >= 0.6:
        print("grade: D")
    elif score < 0.6:
        print("grade: F")
else:
    print("Your score is out of valid range 0.0 - 1.0")


#tags: freecodecamp, conditional