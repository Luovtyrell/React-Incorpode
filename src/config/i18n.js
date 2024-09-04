import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          weeklyBalance: "Weekly balance:",
          totalBalance: "Total balance:",
          showTotalBalance: "Show total balance",
          showWeeklyBalance: "Show weekly balance",
          todayExpenses: "Today's expenses",
          comparedToYesterday: "compared to yesterday",
          expensesLastWeek: "Expenses - Last Week",
          expenses: "Expenses (€)",
          mon: "Mon",
          tue: "Tue",
          wed: "Wed",
          thu: "Thu",
          fri: "Fri",
          sat: "Sat",
          sun: "Sun",
        },
      },
      ca: {
        translation: {
          weeklyBalance: "Balanç total de la setmana:",
          totalBalance: "Balanç total:",
          showTotalBalance: "Mostrar balanç total",
          showWeeklyBalance: "Mostrar balanç setmanal",
          todayExpenses: "Despeses d'avui",
          comparedToYesterday: "respecte a ahir",
          expensesLastWeek: "Despeses - Última setmana",
          expenses: "Despeses (€)",
          mon: "Dll",
          tue: "Dm",
          wed: "Dx",
          thu: "Dj",
          fri: "Dv",
          sat: "Ds",
          sun: "Dg",
        },
      },
      es: {
        translation: {
          weeklyBalance: "Balance total de la semana:",
          totalBalance: "Balance total:",
          showTotalBalance: "Mostrar balance total",
          showWeeklyBalance: "Mostrar balance semanal",
          todayExpenses: "Gastos de hoy",
          comparedToYesterday: "respecto ayer",
          expensesLastWeek: "Gastos - Última semana",
          expenses: "Gastos (€)",
          mon: "Lun",
          tue: "Mar",
          wed: "Mié",
          thu: "Jue",
          fri: "Vie",
          sat: "Sáb",
          sun: "Dom",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
