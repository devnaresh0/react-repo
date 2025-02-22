import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurruncyInfo from './components/userCurruncyInfo'

function App() {
 const [amount,setAmount] = useState(0)
 const [from,setfrom] = useState('usd')
 const [to,setTo] = useState('inr')
 const [convertedAmount,setConvertedAmount] = useState()
const curruncyInfo = useCurruncyInfo(from)
const options = Object.keys(curruncyInfo)

const swap = () => {
  setfrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}
const convert = () => {
  setConvertedAmount(amount = curruncyInfo[to])

}
  return (
    <>
     <h1 className='bg-red-200'>Test for Tailwind</h1>
    </>
  )
}

export default App
