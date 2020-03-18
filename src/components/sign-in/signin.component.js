import React, { Component } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import FormInput from '../form-input/form-input.component';

import './signin.styles.scss';

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }

    googleSignIn = async () => {
        try {
            signInWithGoogle();
        } catch (e) {
            console.log(e);
        }        
    }


    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    }

   
    handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(e) {
            console.log('error');
            console.log(e);
        }
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name='email'
                    type = 'email'
                    value={this.state.email}
                    handleChange= {this.handleChange}
                    label='Email'
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='Password'
                />
                <div className='buttons'>
                    <button className='custom-button' type='submit'>Sign In</button>
                    <button className='custom-button google-sign-in' onClick={() => this.googleSignIn()}>
                        Signin with Google
                    </button>
                </div>
            </form>
            </div>
        );
    }
}

export default Signin;