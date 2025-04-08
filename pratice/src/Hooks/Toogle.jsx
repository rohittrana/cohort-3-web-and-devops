import { useState, useEffect } from 'react'

function Toggle() {
  const [theme, setTheme] = useState('white')
  

  useEffect(() => {
    document.body.style.backgroundColor = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'white' ? 'gray' : 'white')
  }

  return (
    <>
      <div>
        <button onClick={toggleTheme}>
          Switch to {theme === 'white' ? 'gray' : 'Light'} Theme
        </button>
      </div>
    </>
  )
}

export default Toggle