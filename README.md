# Playwright Test Framework

## Overview

This project is a basic framework for writing automated tests using Playwright. It includes tests for both API and UI.

## Features

- API testing
- UI testing
- Allure reporting
- Jenkins integration

## Technologies Used

- [Playwright](https://playwright.dev) - A Node.js library for automating browsers
- [Allure](https://docs.qameta.io/allure/) - Reporting tool for test results

## Installation

To install the project, run:

```bash
npm install
```
Then, install the required Playwright browsers:

```bash
npx playwright install
```
Running Tests
To run all tests, use the command:

```bash
npx playwright test
```
To run a specific test:

```bash
npx playwright test path/to/your/test.spec.js
```
Reports
To generate Allure reports, run:

```bash
allure serve allure-results
```
Contribution
Please create pull requests to improve the project.
