import React, { useState } from "react";
import { RegistrStyled, ButtonEntrStyled, RegStyled, ButtonStyled, InputStyled, HRStyled, UpStyled, DownStyled } from './registration-component.styled';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const RegistrationComponent = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
     const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password || !password2) {
            setError(t("registration_error_fields"));
            return;
        }

        if (password.length < 4) {
            setError(t("registration_error_password_length"));
            return;
        }

        if (!/\d/.test(password)) {
            setError(t("registration_error_password_digit"));
             return;
         }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError(t("registration_error_email"));
            return;
        }


        if (password !== password2) {
             setError(t("registration_error_password_match"));
            return;
         }

        try {
            let users = JSON.parse(localStorage.getItem('users') || '[]');
            const existingUser = users.find(user => user.email === email);

             if (existingUser) {
               setError(t("registration_error_email_exists"));
                return;
            }

            const newUser = {
                id: Date.now(),
                email: email,
                password: password
             };

            users = [...users, newUser];
            localStorage.setItem('users', JSON.stringify(users));

            alert(t("registration_success"));
            navigate('/gamehub/personal-account');
        } catch (error) {
            setError(t("registration_error"));
             console.error("Ошибка регистрации:", error);
        }
    };

    return (
        <RegistrStyled>
            <UpStyled>
                <Link to="/gamehub/entrance" style={{ textDecoration: 'none' }}>
                    <ButtonEntrStyled>{t("registration_login")}</ButtonEntrStyled>
                </Link>
                <RegStyled>{t("registration_register")}</RegStyled>
            </UpStyled>
            <HRStyled />
            <DownStyled>
                <div className="reg_forms">
                    <form name="user_email" onSubmit={handleRegistration}>
                        <InputStyled type="text" name="user_email" placeholder="Введите Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <InputStyled type="password" name="user_password" placeholder="Введите пароль" value={password} onChange={e => setPassword(e.target.value)} />
                        <InputStyled type="password" name="user_password2" placeholder="Повторите пароль" value={password2} onChange={e => setPassword2(e.target.value)} />
                        <ButtonStyled type="submit">{t("registration_button")}</ButtonStyled>
                    </form>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            </DownStyled>
        </RegistrStyled>
    );
};

export default RegistrationComponent;
