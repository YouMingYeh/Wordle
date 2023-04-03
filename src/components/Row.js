/****************************************************************************
  FileName      [ Row.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Row. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import "./css/Row.css";
import React from 'react';
import { useState } from "react";


const Row = ({ guess, rowIdx }) => {
    // let letters = guess.split('');
    
    return (
        <div className='Row-container'>
            {/* TODO 3: Row Implementation -- Row */}
            
            {/* ↓ Default row, you should modify it. ↓ */}
            <div className='Row-wrapper'>
                {guess ?
                guess.map((elem,index)=>{
                    if(!elem) return<div></div>
                    else return <div className={'Row-wordbox'+' '+elem.color.toString()} id={rowIdx+'-'+index} key={rowIdx+'-'+index}>{elem.char}</div>
                 } )
                 : <div></div>
                }
                
            </div>
            {/* ↑ Default row, you should modify it. ↑ */}
        </div>
    )
}

export default Row;