import React from 'react'
import Ban from '../images/winter.jpg'
import '../styles/users.css'
import DarpleForm from './darpleForm'

class profile extends React.Component{
    render(){
        return(
            <div className='padre'>
             <div className='container'>
        
            <header className='header' >
            <img  className='ban'  height='100px' src={Ban} alt='logo'/>
           
            </header>
            
            <section className='section'>
            <img className='avatar' height= "80px" src={this.props.avatar} alt='logo'/>
            <h3>{this.props.name}<br/>{this.props.lastName}</h3>
            </section>

            <footer className='footer'>Darple</footer>
            </div>
            <DarpleForm/>
            </div>
        )
    }
}

export default profile
