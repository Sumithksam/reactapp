import React, { useState } from 'react'

const Student1 = () => {
var [name,upName]=useState("SUMITH")
var [age,upAge]=useState("32")
var [college,upCollege]=useState("MOUNT ZION COLLEGE OF ENGINEERING")
const newName=()=>{
    upName(
        name="sam"
    )
    upAge(
        age="35"
    )
    upCollege(
        college="MZC"
    )


}
  return (
    <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">NAME:</label><br>
                </br>
                <label for="" className="form-label">{name}</label>
            </div>
            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">AGE:</label><br></br>
                <label for="" className="form-label">{age}</label>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">COLLEGE:</label><br></br>
                <label for="" classNameName="form-label">{college}</label>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={newName} className="btn btn-success">CHANGE</button>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default Student1