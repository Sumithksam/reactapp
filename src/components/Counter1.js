import React, { useState } from 'react'

const Counter1 = () => {
    var [num,changeNum]=useState(0)
    
    const incNum =()=>{
        changeNum(num=num+1)   
    }
    const decNum=()=>{
        changeNum(num=num-1)   
    }
  return (
    <div>
        <div class="container">
    <div class="row ">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" class="form-label">{num}</label>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={incNum} class="btn btn-success">INCREMENT</button>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={decNum} class="btn btn-danger">DECREMENT</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Counter1