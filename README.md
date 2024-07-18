# Sleep Debt Calculator

A Node.js program that calculates weekly sleep debt by comparing user-input actual sleep hours to ideal sleep hours, providing personalized feedback on sleep habits.

## Features

- Prompts user for daily sleep hours
- Calculates total weekly sleep
- Compares actual sleep to ideal sleep (8 hours/night)
- Provides feedback on sleep habits:
  - Perfect amount of sleep
  - Excess sleep
  - Sleep debt

## How to Use

1. Ensure Node.js is installed on your system
2. Clone this repository
3. Navigate to the project directory
4. Run the program:
5. Follow the prompts to enter your sleep hours
6. View your sleep debt results

## Dependencies

- `readline` (Node.js built-in module)

## Code Structure

- `getSleepHoursInput()`: Prompts for sleep hours for a specific day
- `getActualSleepHours()`: Collects sleep hours for the entire week
- `getIdealSleepHours()`: Calculates ideal sleep hours (8 hours * 7 days)
- `calculateSleepDebt()`: Main function that orchestrates the calculation and output

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](link-to-your-issues-page) if you want to contribute.

## License

[MIT](https://choosealicense.com/licenses/mit/)
