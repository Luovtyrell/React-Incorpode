![Read time badge with 4 minutes](https://img.shields.io/badge/4min-lightgreen?style=flat&logo=gitbook&logoColor=black&label=readtime)

# React Incorpode

<div align="center"><img src="./public/demo/Incorpode.gif"></div> 
<br>

This project involves creating a frontend application for managing and visualizing expenses. Using React and context, the app handles expense balance, today's expenses, percentage changes, and chart data. It integrates charts with Charts.js and supports multiple languages via the i18n library. Code quality is ensured with Vitest JSDOM tests and SonarCloud.

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Project file Structure](#project-file-structure)
4. [Installation](#installation)
5. [Screenshots](#screenshots)
6. [Contributing](#contributing)
7. [Author](#author)

## Features

- **Responsive Design:** Built with Tailwind CSS and Flowbite to ensure a sleek and responsive UI.
- **Modular Components:** Uses reusable React components for maintainability tries to aply SOLID bases.
- **State Management:** State is managed using Context for scalability.
- **Multi-language Support:** Integrated with i18n for localization.
- **Data Visualization:** Interactive charts and data representation using Charts.js.

## Technologies

**Frontend:**

<a href="https://reactjs.org/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat" alt="React" style="height: 24px">
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat" alt="JavaScript" style="height: 24px">
</a>
<a href="https://tailwindcss.com/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat" alt="Tailwind CSS" style="height: 24px">
</a>
<a href="https://flowbite.com/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Flowbite-purple?style=flat&logo=gradleplaypublisher&logoColor=blue&labelColor=1a56db&color=1a56db" alt="Flowbite" style="height: 24px">
</a>
<a href="https://www.w3.org/Style/CSS/Overview.en.html" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat" alt="CSS3" style="height: 24px">
</a>

**Tools and Libraries:**

<a href="https://vitejs.dev/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat" alt="Vite" style="height: 24px">
</a>
<a href="https://reactjs.org/docs/typechecking-with-proptypes.html" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/PropTypes-lightblue?style=flat&logo=React&logoColor=black" alt="PropTypes" style="height: 24px">
</a>
<a href="https://www.chartjs.org/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=fff&style=flat" alt="Chart.js" style="height: 24px">
</a>
<a href="https://www.i18next.com/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/i18next-26A69A?logo=i18next&logoColor=fff&style=flat" alt="i18next" style="height: 24px">
</a>
<a href="https://vitest.dev/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff&style=flat" alt="Vitest" style="height: 24px">
</a>
<a href="https://sonarcloud.io/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/SonarCloud-F3702A?logo=sonarcloud&logoColor=fff&style=flat" alt="SonarCloud" style="height: 24px">
</a>
<a href="https://postcss.org/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A?logo=postcss&logoColor=fff&style=flat" alt="PostCSS" style="height: 24px">
</a>
<a href="https://eslint.org/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=flat" alt="ESLint" style="height: 24px">
</a>
<a href="https://prettier.io/" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat" alt="Prettier" style="height: 24px">
</a>

<br>

## Project file Structure

<details>

```bash
.REACT-INCORPODE
├── .github/workflows/sonarcloud.yml #SonarCloud GitHub config
├── node_modules #Dependencies
├── public
│   ├── demo
│   └── favicon.ico
├── src
│   ├── assets
│   │   ├── flags
│   │   ├── font
│   │   └── png
│   ├── components
│   │   ├── BalanceSheet
│   │   │   ├── BalanceSheet.jsx
│   │   │   └── BalanceSheet.test.jsx
│   │   ├── DailyExpenses
│   │   │   ├── DailyExpenses.jsx
│   │   │   └── DailyExpenses.test.jsx
│   │   ├── LanguageSelector
│   │   │   ├── LanguageSelector.jsx
│   │   │   └── LanguageSelector.test.jsx
│   │   └── WeeklyExpenseChart
│   │       ├── WeeklyExpenseChart.jsx
│   │       └── WeeklyExpensesChart.test.jsx
│   ├── config
│   │   └── i18n.js
│   ├── context
│   │   ├── SpendingContext.jsx
│   │   └── SpendingProvider.jsx
│   ├── hooks
│   │   ├── useChartOptions.jsx
│   │   └── useSpending.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├──.gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── README.md
├── setupTests.js
├── sonar-project.properties
├── tailwind.config.cjs
├── vite.config.js
└── vitest.config.js
```

</details>

## Installation

To get started with React-Incorpode, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/Luovtyrell/React-Incorpode.git
   ```

2. Navigate to the project directory:

   ```
   cd React-Incorpode
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Screenshots

| Component                | Screenshot                                                                                                          | Description                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Balance Sheet**        | ![Home Page](./public/demo/balanceSheet.png) ![Task Management](./public/demo/balanceSheetWeekly.png)               | Displays weekly or total expenses with a toggle button. Integrates with `useSpending` and `i18n.`                    |
| **Weekly Expense Chart** | ![Task Management](./public/demo/WeeklyExpenseChart.png)                                                            | Renders a bar chart of weekly expenses using `react-chartjs-2` and `Chart.js`, with labels in the selected language. |
| **Daily Expenses**       | ![Charts & Reports](./public/demo/DailyExpensesCat.png)![Charts & Reports](./public/demo/DailyExpenses%20copia.png) | Shows today’s expenses and percentage change from yesterday. Updates color and symbol based on the change.           |
| **Language Selector**    | ![Multi-language](./public/demo/LanguageSelector.png)                                                               | Let users switch between languages using flags. Utilizes `i18n` for language changes.                                |

## Contributing

Welcome contributions to React-Incorpode! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## Author

[![Lucía Ordoñez Vilanova](https://avatars.githubusercontent.com/u/153511070?v=4&s=100 "Lucía Ordoñez Vilanova's GitHub Avatar")](https://github.com/Luovtyrell) <a href="https://www.github.com/Luovtyrell"> <br>
<img src="https://img.shields.io/badge/LUCIA%20ORDO%C3%91EZ%20VILANOVA-gray?style=flat&color=ffcf00"  height="30" alt="Made by Lucía Ordoñez Vilanova"/>
</a>

<a href="mailto:luciaorvilanova@gmail.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=flat"  height="23" alt="Gmail" /></a> <a href="https://www.linkedin.com/in/luovtyrell" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat" height="23" alt="LinkedIn" /></a> <a href="https://t.me/luovtyrell" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=fff&style=flat" height="23" alt="Telegram" /></a> <a href="http://discordapp.com/users/664163194989707308" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=fff&style=flat" height="23" alt="Discord" /></a>
