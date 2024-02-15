import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme // armazenando o valor inferido de forma implicita em alguma variável. Dessa forma não precisamos declarar manualmente os tipos visto que o arquivo irá inferir automáticamente.

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// sempre usar esse arquivo para que o ts entenda todas as propriedades que existem dentro do thema
