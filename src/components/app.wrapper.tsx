import { PropsWithChildren } from 'react'

import { ColorModeProvider } from '@contexts/useColorMode'
import { LanguageProvider } from '@contexts/useLanguage'
import { CategoryProvider } from '@contexts/useCategory'
import { ProductProvider } from '@contexts/useProduct'

export default function AppWrapper(props: PropsWithChildren) {
  return (
    <ProductProvider>
      <CategoryProvider>
        <LanguageProvider>
          <ColorModeProvider>
            {props.children}
          </ColorModeProvider>
        </LanguageProvider>
      </CategoryProvider>
    </ProductProvider>
  )
}
