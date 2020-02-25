import React from 'react'
import ReactDOM from 'react-dom'
import User from './components/users.js'
import avatar from './images/mathiasVeridico.png'


const container2=document.getElementById('container2')
ReactDOM.render(<User
name='Sacoto'
lastName="Santander"
avatar={avatar}
/>, container2)