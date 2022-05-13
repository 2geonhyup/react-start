import logo from './logo.svg';
import './App.css';
import {BlackNav} from 'react-bootstrap';
import {useState} from "react";

function App() {
  let [post, changePost] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);
let originPost = ["남자코트 추천", "강남 우동맛집", "파이썬독학"];
let secandPost = ["여자코트 추천", "강북 우동맛집", "자바 독학"];

  function onClick (i) {
    let copy = [...post];
    if(post[i] !== originPost[i]){
      
      copy[i] = secandPost[i];
      
    }else {
      copy[i] = originPost[i];
    }
    copy.sort();
    
    changePost(copy);
  }



  return (
    <div className='App'>
      <div className='black-nav'>
        <div>ReactBlog</div>
        
      </div>
      <div className='list'>
        <h4>{post[0]}</h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>onClick(0)}>변경</button>
      </div>
      <div className='list'>
        <h4>{post[1]}</h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>onClick(1)}>변경</button>
      </div>
      <div className='list'>
        <h4>{post[2]}</h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>onClick(2)}>변경</button>
      </div>
    </div>
  )

}

export default App;
