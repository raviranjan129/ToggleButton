import  { useState } from 'react';

const App = () => {
  // useState to manage the theme (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
   <div className={isDarkMode?'bg-gray-700':'bg-white'  }>
<div className=' h-screen'>
  <h1>Toggled To {isDarkMode? 'dark mode':'light mode'}</h1>
 
  <button
  onClick={toggleTheme}
  className='bg-blue-600 p-3 rounded-2xl'
  >
    Click to {isDarkMode? 'light Mode': 'dark Mode'}
    </button>
</div>
   </div>
  );
};

export default App;
