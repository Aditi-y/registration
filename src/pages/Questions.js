import axios from 'axios';
import React,{useEffect,useState}from "react";
import { Link , redirect} from 'react-router-dom';

function Questions() {
    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get(
                    "https://dummyapicsi.onrender.com/api/questions")
                console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        })()
    });

  return (
    <div>
      <h1>Quiz App</h1>
      <div className='questions'>
        <h2>Q1. What is React router dom? </h2>
      </div>
      <div className='options'>
        <div> 
            <p>
                <input type ="radio"/>
                option 1
            </p>
        </div>

        <div> 
            <p>
                <input type ="radio"/>
                option 2
            </p>
        </div>

        <div> 
            <p>
                <input type ="radio"/>
                option 3
            </p>
        </div>
         
        <div> 
            <p>
                <input type ="radio"/>
                option 4
            </p>
        </div>
      </div>
      <div className="buttons">
        <button> prev</button>
        <button> next</button>
      </div>
       <p>
       <Link to="/login"></Link>
       </p>
    </div>
  )
}

export default Questions
