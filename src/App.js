
import './App.css';
import React from 'react';
import { CloseButton } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



class App extends React.Component{


 

state={taab:[{id:0,task:"noum",done:false},{id:1,task:"mekla",done:false},{id:2,task:"9raya",done:false}],text:""}

add=()=>{this.setState({taab:[...this.state.taab,{id:Math.random(),task:this.state.text,done:false}]})}

delete=(x)=>{this.setState({taab:this.state.taab.filter(el=>el.id!==x)})}

done=(y)=>{this.setState({taab:this.state.taab.map(el=>el.id===y ?{ ...el, done:!el.done}:el)})}


render(){

console.log(this.state.taab)
return <div>
  <div className='center'>
  <input  onChange={(event)=>this.setState({text : event.target.value })}/>
<button onClick={this.add}>Add</button>
</div>
{this.state.taab.map(el=><div key={el.id} >
  <li style={{textDecoration:el.done?"line-through":null}} >{el.task}</li>
  <CloseButton onClick={()=>this.delete(el.id)}  aria-label="Hide" /> 

  <Button onClick={()=>this.done(el.id)} variant="success">{el.done?"undone":"done"}</Button>{' '}

  



</div>)


}





</div>


}

}
export default App;
