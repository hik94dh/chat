import React from 'react';
import { LoginForm, RegisterForm } from 'modules';
import { Route } from 'react-router-dom';

import './styles.scss';

const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path={['/', '/login']} component={LoginForm} />
            <Route exact path="/registration" component={RegisterForm} />
        </div>
    </section>
);

export default Auth;
