# SleepDebtCalculator
A Node.js program that calculates weekly sleep debt by comparing user-input actual sleep hours to ideal sleep hours, providing personalized feedback on sleep habits



# Features
Prompts the user to input sleep hours for each day of the week
Calculates total actual sleep hours
Compares actual sleep to ideal sleep (8 hours per night)
Provides feedback on sleep habits:
Perfect amount of sleep
Excess sleep
Sleep debt
# How to Use
Ensure you have Node.js installed on your system.
Save the SleepDebtCalculator.js file to your local machine.
Open a terminal or command prompt and navigate to the directory containing the file.
Run the program using the command: node SleepDebtCalculator.js
Follow the prompts to enter your sleep hours for each day of the week.
The program will display your results, including actual sleep hours, ideal sleep hours, and sleep debt status.
# Dependencies
This program uses the built-in readline module in Node.js for user input.

# Code Structure
getSleepHoursInput(): Prompts for sleep hours for a specific day
getActualSleepHours(): Collects sleep hours for the entire week
getIdealSleepHours(): Calculates ideal sleep hours (8 hours * 7 days)
calculateSleepDebt(): Main function that orchestrates the calculation and output

Enjoy tracking your sleep habits with this Sleep Debt Calculator!
