/****************************************************************************
  FileName      [ CurRow.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the CurRow. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import "./css/Row.css";
import React from 'react';


const CurRow = ({ curGuess, rowIdx }) => {
    let letters = curGuess.split('');

    return (
        <div className='Row-container'>
            {/* TODO 3: Row Implementation -- CurRow */}
            
            {/* ↓ Default row, you should modify it. ↓ */}
            <div className='Row-wrapper current'>

                {letters.map((elem,index)=>{
                    if(!elem) return<div></div>
                    else return <div className='Row-wordbox' id={rowIdx+'-'+index} key={rowIdx+'-'+index}>{elem}</div>
                 })}

                 {/* <div className='Row-wordbox' id={rowIdx+'-'} key={rowIdx+'-'}>{curGuess[0]}</div> */}
            
            </div>
            {/* ↑ Default row, you should modify it. ↑ */}
        </div>
    )
}

export default CurRow;
