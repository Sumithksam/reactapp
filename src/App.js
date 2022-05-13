import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        
                <div class="row g-3">
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">NAME:</label>
                        <input placeholder="Enter name" type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">ROLL NO:</label>
                        <input placeholder="Enter roll no:" type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">ADMISSION NUMBER:</label>
                        <input placeholder="Enter admission no:" type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">MOBILE:</label>
                        <input placeholder="Enter mobileno:" type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" class="form-label">COLLEGE:</label>
                        <input placeholder="Enter college:" type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">USERNAME:</label>
                        <input placeholder="Enter username:" type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">PASSWORD:</label>
                        <input placeholder="Enter password:" type="text" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button class="btn btn-success">REGISTER</button>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<a href="index.html"><button class="btn btn-success">BACK TO LOGIN</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
