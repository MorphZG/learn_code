# Exercise 2: Write a program that uses input to prompt a user for their name and then welcomes them.
prompt = "Enter your name: "
name = input(prompt)
print(f"Hello {name}")

# Exercise 3: Write a program to prompt the user for hours and rate per hour to compute gross pay.
hours = int(input("enter your working hours: "))
rate = float(input("enter your rate per hour: "))
gross_pay = hours * rate
print(gross_pay)

# Exercise 4: Assume that we execute the following assignment statements:
width = 17
height = 12.0
# For each of the following expressions, write the value of the expression and the type (of the value of the expression).
print(width//2) # 8, int

print(width/2.0) # 8.5 float

print(height/3) # 4.0 float

print(1 + 2 * 5) # 11 int

# Use the Python interpreter to check your answers.


#tags: freecodecamp, variable, expression, statement