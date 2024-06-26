import React from "react";
import { RegistrStyled, EntrStyled, ButtonRegStyled, ButtonStyled, InputStyled, HRStyled, UpStyled, DownStyled } from './entrance-component.styled'

import { Link } from 'react-router-dom';

const EntranceComponent = () => {
  return (
    <RegistrStyled>
      <UpStyled>
        <EntrStyled>Вход</EntrStyled>
        <ButtonRegStyled href="registration">Регистрация</ButtonRegStyled>
      </UpStyled>
      <HRStyled />
      <DownStyled>
        <div className="reg_forms">
          <form name="user_email" action="#" method="get">
            <InputStyled type="text" name="user_email" placeholder="Введите Email" />
          </form>
          <form name="user_password" action="#" method="get">
            <InputStyled type="password" name="user_password" placeholder="Введите пароль" />
          </form>
          <Link to="/gamehub/personal-account">
            <ButtonStyled>Войти</ButtonStyled>
          </Link>
        </div>
      </DownStyled>
    </RegistrStyled>
  );
};

export default EntranceComponent;
