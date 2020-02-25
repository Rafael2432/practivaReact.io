import React from 'react'
import '../styles/darpleForm.css'

class form extends React.Component{
 submit = e =>{
        console.log('se ha intentado enviar el formulario')
        e.preventDefault()
    } 
    handleClick =  e =>{
   console.log({value:e.target.value})
    }

    render(){
        return(
   <form className= 'containerForm' onSubmit={this.submit} >
   <input onChange={this.handleClick} className="passwordText" type='text' placeholder="Password"/>
   <br/>
   <input className="formButton"   type='button' value='Ready'/>
   </form>
        )
    }
}
export default form
