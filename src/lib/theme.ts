import theme from "../content/theme.json";
import { themeSchema } from "../content/config";

const parsedTheme = themeSchema.parse(theme);

const themeVariables = {
  "--theme-color-primary": parsedTheme.primaryColor,
  "--theme-color-secondary": parsedTheme.secondaryColor,
  "--theme-font-family-base": parsedTheme.fontFamily,
  "--theme-font-size-base": parsedTheme.baseFontSize,
  "--theme-spacing-unit": parsedTheme.spacingUnit,
  "--theme-border-radius": parsedTheme.borderRadius,
} as const;

export const themeInlineCssVariables = Object.entries(themeVariables)
  .map(([name, value]) => `${name}: ${value}`)
  .join("; ");
