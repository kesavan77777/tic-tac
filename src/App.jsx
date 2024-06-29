import React, { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [no, setNo] = useState(0);
  const [arr, setArr] = useState(['', '', '', '', '', '', '', '', ''])
  const [win, setWin] = useState('');

  useEffect(() => {
    if ((arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X') || (arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X') || (arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X') || (arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X') || (arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X') || (arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X') || (arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X') || (arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X')) {
      setWin('X won')
      toast.success('X won')
    }
    else if ((arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O') || (arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O') || (arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O') || (arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O') || (arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O') || (arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O') || (arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O') || (arr[2] == 'O' && arr[4] == 'O' && arr[8] == 'O')) {
      setWin('O wins')
      toast.success('O won')
    }

  }, [arr])
  return (


    <div className='toe'>
      <div className="tic">
        {arr.map((i, ind) => (
          <button key={ind} onClick={() => {
            if (win == '' && arr[ind] == '') {
              setNo(no + 1)
              let arr1 = arr.map((i1, ind1) => {
                if (ind1 == ind) {
                  return (no % 2 == 0) ? 'X' : 'O'
                }
                return i1
              })
              setArr(arr1)
            }
          }} >{arr[ind]}</button>
        ))}
      </div>
      <div className="footer">
        <h2>Winner Status:  <span>{win}</span></h2>
        <button onClick={() => {
          setArr(['', '', '', '', '', '', '', '', ''])
          setWin('')
          setNo(0)
        }}>reset</button>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
