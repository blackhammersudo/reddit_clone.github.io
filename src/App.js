import './style.css'
import Logo from './picture/LOGO.png'

function App() {
  return (
  <header className="flex w-full bg-reddit_dark p-2">
    <div className='mx-4'>

    <img src={Logo} alt="" className='w-8 h-8 '/>  
    </div>
    
  </header>
  );
}

export default App;
