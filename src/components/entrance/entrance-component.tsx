import React from "react";
import './entrance-component.css';

const EntranceComponent = () => {
  return (
    <div className="reg">
      <div className="up">
        <button id="entrance2">Вход</button>
        <button id="registration2">Регистрация</button>
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
          <button id="ent">Войти</button>
        </div>
      </div>
    </div>
  );
};

export default EntranceComponent;
