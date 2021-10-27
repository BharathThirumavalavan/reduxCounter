import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import store from '../app/store'
import '../public/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )


}

export default MyApp
