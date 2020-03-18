import React from 'react';

import Signup from '../../components/sign-up/signup.component';
import Signin from '../../components/sign-in/signin.component';

import './signin-signup.styles.scss';

const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>  
        <Signin />     
        <Signup />        
    </div>
);

export default SignInSignUp;
