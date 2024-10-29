JS + Playwright Test Framework
This project is a basic framework for writing automated tests using Playwright. It includes tests for both API and UI.

Installation
Clone the repository:

Use the command git clone to copy the repository to your local machine.
Navigate to the project directory.
Install dependencies:

Run the command npm install to install all necessary packages.
Install Playwright browsers:

Execute the command npx playwright install to download the browsers needed to run the tests.
Running Tests
To run all tests, use the command:

npx playwright test
To run a specific test:

npx playwright test path/to/your/test.spec.js
Allure Reports (if used)
Generating reports:
Run the command allure serve allure-results to compile and view Allure reports.
Jenkins Integration
To automate tests in Jenkins, create a new job and add the necessary build steps as described in the Jenkins documentation.

Contribution
Please create pull requests to improve the project.