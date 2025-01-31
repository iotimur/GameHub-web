import React, { useState } from "react";
import { RegistrStyled, EntrStyled, ButtonRegStyled, ButtonStyled, InputStyled, HRStyled, UpStyled, DownStyled } from './entrance-component.styled'
import { useNavigate, Link } from 'react-router-dom';

const EntranceComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError("Пожалуйста, заполните все поля.");
            return;
        }
        try {
           const users = JSON.parse(localStorage.getItem('users') || '[]');
           const user = users.find(user => user.email === email && user.password === password);

           if (user) {
             navigate('/gamehub/personal-account');
            } else {
               setError("Неправильный email или пароль.");
            }
        } catch (error) {
          setError("Ошибка при входе.");
        }
    };

    return (
      <RegistrStyled>
            <UpStyled>
              <EntrStyled>Вход</EntrStyled>
              <Link to="/gamehub/registration" style={{textDecoration: 'none'}}><ButtonRegStyled>Регистрация</ButtonRegStyled></Link>
           </UpStyled>
           <HRStyled />
            <DownStyled>
                <div className="reg_forms">
                  <form name="user_email" onSubmit={handleLogin}>
                     <InputStyled type="text" name="user_email" placeholder="Введите Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <InputStyled type="password" name="user_password" placeholder="Введите пароль" value={password} onChange={e => setPassword(e.target.value)} />
                       <ButtonStyled type="submit">Войти</ButtonStyled>
                 </form>
                    {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
          </DownStyled>
        </RegistrStyled>
    );
};

export default EntranceComponent;