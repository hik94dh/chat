import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Button, Block } from 'components';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input
                                prefix={(
                                    <Icon
                                        type="user"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                )}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={(
                                    <Icon
                                        type="lock"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                )}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>
                        <Link
                            to="/registration"
                            className="auth__register-link"
                        >
                            Зарегистрироваться
                        </Link>
                    </Form>
                </Block>
            </React.Fragment>
        );
    }
}

export default LoginForm;
