import React from "react";
import { RegistrStyled, ButtonEntrStyled, RegStyled, ButtonStyled, InputStyled, HRStyled, UpStyled, DownStyled } from './registration-component.styled'

const RegistrationComponent = () => {
    return (
        <RegistrStyled>
            <UpStyled>
                <ButtonEntrStyled>Вход</ButtonEntrStyled>
                <RegStyled>Регистрация</RegStyled>
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
                    <form name="user_password2" action="#" method="get">
                        <InputStyled type="password" name="user_password2" placeholder="Повторите пароль" />
                    </form>
                    <ButtonStyled>Регистрация</ButtonStyled>
                </div>
            </DownStyled>
        </RegistrStyled>
    );
};

export default RegistrationComponent;
