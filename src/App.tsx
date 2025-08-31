import { MainLayout } from './MainLayout'
import { ASide } from "./ASide"
import { MainContent } from './MainContent'

function App() {
  return (
    <>
      <MainLayout >
        <ASide />
        <MainContent />
      </MainLayout>
    </>
  )
}

export default App
