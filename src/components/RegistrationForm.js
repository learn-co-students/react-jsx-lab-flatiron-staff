import React from 'react'

export default class RegistrationForm extends React.Component {
    render() {
        return <form>
            <input type="text" placeholder="text"></input>
            <input type="password" placeholder="password"></input>
            <button type="submit">Submit</button>
        </form>
    
    }
}