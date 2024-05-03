import React from "react";
import { RegistrStyled, ButtonEntrStyled, ButtonRegStyled, ButtonStyled, InputStyled, HRStyled, UpStyled, DownStyled } from './entrance-component.styled'

const EntranceComponent = () => {
  return (
    <RegistrStyled>
      <UpStyled>
        <ButtonEntrStyled>Вход</ButtonEntrStyled>
        <ButtonRegStyled>Регистрация</ButtonRegStyled>
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
          <ButtonStyled>Войти</ButtonStyled>
        </div>
      </DownStyled>
    </RegistrStyled>
  );
};

export default EntranceComponent;
