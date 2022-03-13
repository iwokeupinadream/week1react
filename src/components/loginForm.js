import React from 'react'
import navBar from './navBar'

let e = React.createElement

export default class loginForm extends React.Component {
    render() {
        return e('div', {}, 
        e(navBar, {}, null),
        e('div', {className: 'center-div'},
        e('form', {className: 'form form-control login-form'}, 
        e('h3', {}, 'login'),
        <input type="text"/>,
        <input type="text"/>,
        e('button', {className: 'btn btn-primary'}, 'Submit')
        )
        )
        )
    }
}