import { useMemo } from "react";

const CAREER_START = new Date(2018, 3, 1); // April 1, 2018

function computeYearsOfExperience(): number {
  const now = new Date();

  let years = now.getFullYear() - CAREER_START.getFullYear();
  let months = now.getMonth() - CAREER_START.getMonth();

  if (now.getDate() < CAREER_START.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return years;
}

/** Plain function — safe to call in Server Components */
export function getYearsOfExperience(): number {
  return computeYearsOfExperience();
}

/** React hook — use in Client Components */
export function useYearsOfExperience(): number {
  return useMemo(() => computeYearsOfExperience(), []);
}
