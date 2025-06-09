# Automation Project - TM

This project contains test automated of TM projects


## Characteristics

- **Playwright** : facilitates automated E2E testing.
- **Allure** : Generates reports
- **Axios** : To do HTTP Request

## Requirements

- **Node** : 20 or higher


## Installation

1. Clone the project

```bash
git clone 
```

2. Go to the folder
```bash
cd tm-automation
```

3. Install all dependencies
```bash
npm install
```

4. Install all browsers
```bash
npx playwright install --with-deps
```

## Ejecucion de pruebas

1. To run tests
```bash
npm test
```
2. To generate the allure report
```bash
npm run generate-report
```
3. To open the allure report
```bash
npm run open-report