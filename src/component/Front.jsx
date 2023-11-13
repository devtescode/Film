import React, { useState, useEffect } from 'react'
import "./Front.css"
const url="https://www.omdbapi.com?apikey=e1112302&"
import axios from 'axios'
const Front = () => {
  const [filmname, setfilmname] = useState("")
  const [first, setfirst] = useState([])
  
  useEffect(() => {
    if(first.length == 0){
      axios.get(`${url}s=mercy`).then((res) => {
        setfirst(res.data.Search)
        console.log(res.data);
        console.log(first);
      }).catch((err) => {
        
      })
    }
  console.log(url);
  }, [])
  
  const filmBtn = () => {
   if (filmname == "") {
     swal("Empty Input", "Enter Any Title Film In Your Input", "error");
    }
    else {
    
      axios.get(`${url}s=${filmname}`).then((res) => {
        setfirst((prv)=>[...res.data.Search])
        console.log(res.data);
        console.log(first);
      }).catch((err) => {

      })
    }
  }
  const searchBtn = () => {
    document.getElementById('bar').style.display = "block"
  }


  const modeBtn = () => {
    if (changmode.innerHTML == `<i class="ri-moon-fill"></i>`) {
      dark.style.backgroundColor = "black"
      changmode.innerHTML = `<i class="ri-moon-line"></i>`
    }
    else if (changmode.innerHTML == `<i class="ri-moon-line"></i>`) {
      dark.style.backgroundColor = "white"
      changmode.innerHTML = `<i class="ri-moon-fill"></i>`
    }
  }
  return (
    <>
      <div className='d-flex justify-content-between px-4 p-2'>
        <button onClick={searchBtn} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="ri-search-line"></i>
        </button>
        <button className='btn btn-dark' id='changmode' onClick={modeBtn}><i className="ri-moon-fill"></i></button>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Search</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {/* <input type="text"  required /> */}
              <div class="group">
                <input required="" type="text" onChange={(e) => setfilmname(e.target.value)} class="input" />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Enter-Input</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={filmBtn} data-bs-dismiss="modal"
              ><i className="ri-search-line"></i></button>
            </div>
          </div>
        </div>
      </div>








      {/* <div className="wrapper col-md-11 col-sm-12 mx-auto" id='bar' style={{ display: "none" }}>
        <div className="input-data d-flex">
          <input type="text" onChange={(e) => setfilmname(e.target.value)} required />
          <button className='btn btn-dark' ></button>
          <div className='underline'></div>
          <label>Search Film Image</label>
        </div>
      </div> */}

      <div>
        <div className='container row gap-4 mx-auto w-100' style={{marginTop:"5%"}}>
          {
            first == "" ?
            <div>Wait for a moment</div>
            :
            first.map((item, index) => (
              <div className="card mx-auto shadow-lg" style={{ maxWidth: "19rem" }}>
              <img src={item.Poster} className="card-img-top" alt="..." />
              <div className='card-body'>
                <div className='row'>
                  <div className='col-6'>
                    <p className="card-text fw-bold">Title</p>
                    <p className="card-text fw-bold">Year</p>
                    <p className="card-text fw-bold">Type</p>
                  </div>
                  <div className='col-6'>
                    <p className="card-text">{item.Title}</p>
                    <p className="card-text">{item.Year}</p>
                    <p className="card-text">{item.Type}</p>
                  </div>
                </div>
              </div>
            
              <div className='card-footer text-end fw-bold'>
                <p className="card-text">NO: {index + 1}</p>
              </div>
            </div>
            



            ))
          }
        </div>
      </div>
    </>
  )
}

export default Front