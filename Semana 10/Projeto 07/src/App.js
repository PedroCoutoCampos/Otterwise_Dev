import BoxList from './components/BoxList'
import { BoxProvider } from './context/box-context'
import { StyleApp } from './components/styles'

function App() {

  return (
    <BoxProvider>
      <StyleApp className="app">
        <BoxList />
      </StyleApp>
    </BoxProvider>
  )
}

export default App
