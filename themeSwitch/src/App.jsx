import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import React from 'react'
import Card from './components/Card'
function App() {
  const [themeMode, setthemeMode] = React.useState("light")
  const lightTheme = () => {
    setthemeMode("light")
    document.querySelector('body').classList.remove("bg-white")
    document.querySelector('body').classList.add("bg-slate-100")
  }
  const darkTheme = () => {
    setthemeMode('dark')
    document.querySelector('body').classList.remove("bg-slate-100")
    document.querySelector('body').classList.add("bg-white")
  }

  React.useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <div className="w-full shadow-2xl max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
