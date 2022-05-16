import React from 'react'
import { Navbar } from './Navbar'

const Registerpage = () => {
  return (
    <div>
        <Navbar/>
        <div class="container">
            <h1>LOGIN</h1>
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" class="form-label">USERNAME:</label>
                <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">PASSWORD:</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button class="btn btn-success">LOGIN</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Registerpage