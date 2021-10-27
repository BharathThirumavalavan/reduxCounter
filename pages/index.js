import Head from 'next/head'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions, addNumberReducer } from '../app/store'

export default function Home() {
  const count = useSelector((state) => state.counter.counter)
  const visiblity = useSelector((state) => state.counter.visible)
  const dispatch = useDispatch()
  const [input,setInput] = useState(0)

  function incrementTimer(e){
    e.preventDefault();
    dispatch(counterActions.increment())
  }
  
  function decrementTimer(e) {
    e.preventDefault()
    dispatch(counterActions.decrement())
  }

  function hideTimer(e){
    e.preventDefault()
    dispatch(counterActions.toggle())
  }

  function addInput(e){
     e.preventDefault()
    setInput(e.target.value)
  }

  function resetTimer(e) {
    e.preventDefault()
    dispatch(counterActions.reset())
  }

  function validateInput(e){
    e.preventDefault()
    dispatch(addNumberReducer(input))
  }
  

  return (
    <div className=''>
      <Head>
        <title>Next Redux</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='center flex items-center justify-center'>
        <div>
          <h2 className='mb-4 pb-5 text-center'>
            <span className=' text-5xl font-extralight text-gray-900 slideRight'>
              Counter with{' '}
            </span>
            <span className='font-mono text-3xl text-purple-600 slideLeft '>
              @reduxtoolkit
            </span>
          </h2>

          {visiblity && (
            <>
              <div className='flex flex-col items-center justify-center slideUp'>
                <div>
                  <p
                    className={`text-center px-6 py-3 text-2xl font-normal  bg-gray-100 rounded-full border-2  ${
                      count >= 0
                        ? 'text-green-700 border-green-700'
                        : 'text-red-700 border-red-700'
                    }`}
                  >
                    {count}
                  </p>
                </div>
                <div className='flex items-center justify-center'>
                  <button
                    className='slideRight button mx-3 my-5 px-4 py-2 font-semibold tracking-wide rounded-md text-gray-50 bg-gradient-to-tr from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 active:ring-2 active:ring-gray-300'
                    onClick={incrementTimer}
                  >
                    Increment
                  </button>
                  <button
                    className=' mx-3 my-5 px-4 py-2 font-semibold tracking-wide rounded-md text-gray-50 bg-gradient-to-tr from-red-500 to-pink-500  hover:from-red-400 hover:to-pink-400 active:ring-2 active:ring-gray-300'
                    onClick={decrementTimer}
                  >
                    Decrement
                  </button>
                  <button
                    className='slideLeft mx-3 my-5 px-4 py-2 font-semibold tracking-wide rounded-md text-gray-900 bg-gradient-to-br from-gray-100 to-gray-400  hover:from-gray-500 hover:to-gray-300  active:ring-2 active:ring-gray-300'
                    onClick={resetTimer}
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className='flex flex-row items-center justify-center slideUp'>
                <input
                  type='number'
                  maxLength={2}
                  className='border rounded p-2 slideRight'
                  onChange={addInput}
                  value={input}
                />
                <button
                  className='mx-3 my-5 px-4 py-2 font-semibold tracking-wide text-gray-50 bg-gradient-to-tr from-blue-900 to-purple-700 rounded-md hover:opacity-80     active:ring-2 active:ring-gray-300 slideLeft'
                  onClick={validateInput}
                >
                  Add this to counter
                </button>
              </div>
            </>
          )}

          <div className='flex align-center justify-center slideUpTimer'>
            <button
              className='mx-3 my-5 px-4 py-2 font-semibold tracking-wide text-gray-50 bg-gradient-to-br from-red-500 to-yellow-500 rounded-md hover:from-red-400 hover:to-yellow-400 active:ring-2 active:ring-gray-300'
              onClick={hideTimer}
            >
              {visiblity ? 'Turn off timer' : 'Turn on timer'}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
