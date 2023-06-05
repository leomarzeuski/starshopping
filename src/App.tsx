import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export function App() {

  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache()
  })

  return (
    <ThemeProvider theme={defaultTheme}>
          <ApolloProvider client={client}>

      <GlobalStyle />

      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  )
}
