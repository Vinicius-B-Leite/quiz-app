import { darkMode } from "../theme/darkMode";

type Theme = typeof darkMode

declare module "styled-components" {
        export interface DefaultTheme extends Theme{}
}