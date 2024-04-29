import React from "react";
import './registration-component.css';

const RegistrationComponent = () => {
    return (
        <div className="reg">
            <div className="up">
                <button id="entrance">Вход</button>
                <button id="registration">Регистрация</button>
            </div>
            <hr />
            <div className="down">
                <div className="reg_forms">
                    <form name="user_email" action="#" method="get">
                        <input type="text" name="user_email" placeholder="Введите Email" />
                    </form>
                    <form name="user_password" action="#" method="get">
                        <input type="password" name="user_password" placeholder="Введите пароль" />
                    </form>
                    <form name="user_password2" action="#" method="get">
                        <input type="password" name="user_password2" placeholder="Повторите пароль" />
                    </form>
                    <button id="regis">Регистрация</button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationComponent;
