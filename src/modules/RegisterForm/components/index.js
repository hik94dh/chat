/* eslint-disable */
import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Button, Block } from 'components';
import { Link } from 'react-router-dom';

const success = false;

const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        dirty,
    } = props;

    return (
        <React.Fragment>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат вам нужно зарегистрироваться</p>
                </div>
                <Block>
                    {!success ? (
                        <Form
                            onSubmit={handleSubmit}
                            className="login-form"
                        >
                            <Form.Item
                                help={!touched.email ? "" : errors.email}
                                validateStatus={!touched.email ? "" : errors.email ? 'error' : 'success'}
                                hasFeedback
                            >
                                <Input
                                    id="email"
                                    prefix={(
                                        <Icon
                                            type="mail"
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    )}
                                    type="email"
                                    placeholder="E-mail"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={(
                                        <Icon
                                            type="user"
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    )}
                                    type="text"
                                    placeholder="Ваше имя"
                                />
                            </Form.Item>
                            <Form.Item
                                validateStatus={
                                    !touched.password ? "" : errors.password ? "error" : "success"
                                  }
                                  help={!touched.password ? "" : errors.password}
                                  hasFeedback
                            >
                                <Input
                                    id="password"
                                    prefix={
                                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                                    }
                                    size="large"
                                    type="password"
                                    placeholder="Пароль"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
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
                                    placeholder="Повторите пароль"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button onClick={handleSubmit} type="primary" size="large">
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>
                            <Link to="/login" className="auth__register-link">
                                Войти в аккаунт
                            </Link>
                        </Form>
                    ) : (
                        <div className="auth__success-block">
                            <Icon type="info-circle" theme="twoTone" />
                            <h2>Подтвердите свой аккаунт</h2>
                            <p>
                                На вашу почту отправлено письмо с ссылкой на
                                подтверждение аккаунта
                            </p>
                        </div>
                    )}
                </Block>
            </React.Fragment>
    )
}

export default RegisterForm;
