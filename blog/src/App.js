import logo from './logo.svg';
import './App.css';
import {BlackNav} from 'react-bootstrap';
import {useState} from "react";



function App() {
  let [post, changePost] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);

  const postMap = 
    {
      "남자코트 추천":"여자코트 추천","강남 우동맛집":"전북 우동맛집", "파이썬독학":"자바독학",
      "여자코트 추천":"남자코트 추천","전북 우동맛집":"강남 우동맛집", "자바독학":"파이썬독학"
};

  function onClick (text) {
    let copy = [...post];
    let newCopy = copy.map(function(val) { console.log(val, text);
      if(val===text) {console.log(postMap[text]);return postMap[text]}else{return val}});
      newCopy.sort();
    changePost(newCopy);
  }



  return (
    <div className='App'>
      <div className='black-nav'>
        <div>ReactBlog</div>
        
      </div>
      <div className='list'>
        <h4>{post[0]}</h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>onClick(post[0])}>변경</button>
      </div>
      <div className='list'>
        <h4>{post[1]}</h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>onClick(post[1])}>변경</button>
      </div>
      <div className='list'>
        <h4>{post[2]}</h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>onClick(post[2])}>변경</button>
      </div>
    </div>
  )

}

export default App;
