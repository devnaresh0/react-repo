import React from 'react'

function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurruncy = "usd",
    amountDisabled = false,
    curruncyDisabled = false,
    className = "",



 
}){

}

 return (
    <div className={`
        bg-white p-3 rounded-lg text-sm flex
        
        ${className}`}>
            <div className='w-1-2'>
                <label 
                className='text-black/40 mb-2 inline-block'
                >{label}</label>
                <input type="number"
                className='outline-none w-full bg-transparent py-1.5'
                placeholder='Amount'
                disabled = {amountDisabled}
                value={amount

                }
                onChange={(e) => {
                        onAmountChange && onAmountChange(Number(e.target.value))
                }}

                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
            Curruncy Type</div>
        </div>
  )
export default Inputbox