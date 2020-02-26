import React from 'react'
import User from './users.js'
import avatar from '../images/mathiasVeridico.png'
import DarpleForm from './darpleForm.js'


class mainPage extends React.Component{

    state={form:{
        Name:'',
        'Last name':'',
        Email:'',
    }}

    onChange = e =>{ 

this.setState({
    form:{
        ...this.state.form,
        [e.target.name]:e.target.value
    }
    
})
    }
    render(){
        return(
            <div className='padre'>
        <User
        name={this.state.form.Name}
        lastName={this.state.form['Last name']}
        avatar={avatar}/>

        <DarpleForm  state={this.state} change={this.onChange} />
    </div>
    
       

        )
    }
}

export default mainPage
