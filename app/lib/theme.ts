export type Theme = "dark" | "light";

const STORAGE_KEY = "academic-theme";
const LIGHT_START_HOUR = 6;
const LIGHT_END_HOUR = 18;

function timeOfDayTheme(): Theme {
  const hour = new Date().getHours();
  return hour >= LIGHT_START_HOUR && hour < LIGHT_END_HOUR ? "light" : "dark";
}

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return timeOfDayTheme();
}

export function saveTheme(theme: Theme) {
  window.localStorage.setItem(STORAGE_KEY, theme);
}
