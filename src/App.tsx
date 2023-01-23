import Game from './components/Game'
import Header from './components/Header'
import Score from './components/Score'

function App() {
  return (
    <div className='bg-slate-800 min-h-screen flex flex-col justify-center items-center'>
      <Header />
      <Game />
      <Score />
    </div>
  )
}

export default App
