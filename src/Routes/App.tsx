import {  useState } from 'react';
import '../output.css'
import RandomQuote from '../Components/RandomQuoteImgs/RandomQuote'
import Loading from '../Components/Loading';



function App() {
  const [change, setChange] = useState(true);

  return (
    <>
        <main className='h-screen w-screen bg-black' >
            <div className='bg-black text-white min-h-full flex flex-col items-center font-body'>
              <article className='w-3/5 mt-20 text-center mb-10'>
                <h2 className='mb-2 text-xl'>
                  Uma Citação aleatoria de:
                </h2>

                <RandomQuote change={change} setChange={setChange} />
              
                <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-4 mb-8' />
                <section>
                  <div>
                    <h3>Nova citação?</h3>
                    <button onClick={ ()=> setChange(true)} className='mt-1 pt-2 pb-2 pr-4 pl-4 bg-white text-zinc-900 hover:bg-zinc-300 hover:text-zinc-50 transition-all duration-300'>Trocar</button>
                  </div>
                </section>
              </article>
              {change && <Loading/>}
            </div>
        </main>
    </>
  )
}

export default App
