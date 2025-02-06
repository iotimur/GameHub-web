import React, { useState, useEffect } from 'react';
import { DFlexStyled, FormsStyled, Lin, IzmStyled, TextStyled, BlockStyled, InputStyled, ChangeStyled, FormStyled, FormsInFormStyled, Er } from './personal-information.styled'

export function PersonalInformation() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState(''); // Состояние для сообщения об ошибке

    useEffect(() => {
        // Загрузка данных из Local Storage при монтировании
        const storedName = localStorage.getItem('userName');
        if (storedName) setName(storedName);

        const storedSurname = localStorage.getItem('userSurname');
        if (storedSurname) setSurname(storedSurname);

        const storedTel = localStorage.getItem('userTel');
        if (storedTel) setTel(storedTel);

        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) setEmail(storedEmail);

        const storedLogin = localStorage.getItem('userLogin');
        if (storedLogin) setLogin(storedLogin);

        const storedDate = localStorage.getItem('userDate');
        if (storedDate) setDate(storedDate);

    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

   const handleSaveClick = () => {
        if (!tel.startsWith('+7')) {
            setError('Номер телефона должен начинаться с +7.');
            return;
        }

      const telWithoutPlus7 = tel.startsWith('+7') ? tel.slice(2) : tel;

        if (telWithoutPlus7.length !== 10) {
            setError('Номер телефона должен содержать 10 цифр после +7.');
            return;
        }

        if (!isValidEmail(email)) {
          setError('Пожалуйста, введите правильный email адрес.');
          return;
        }

        // Сохранение данных в Local Storage
        localStorage.setItem('userName', name);
        localStorage.setItem('userSurname', surname);
        localStorage.setItem('userTel', tel);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userLogin', login);
        localStorage.setItem('userDate', date);

        setIsEditing(false);
        setError('');
    };

     const handleTelChange = (e) => {
        let value = e.target.value;
        const hasPlus7 = value.startsWith('+7');

        value = value.replace(/[^0-9]/g, '');
        value = value.slice(0, 11);

        if (hasPlus7) {
            value = '+' + value;
        }

        setTel(value);
    };

    const handleTelFocus = (e) => {
        if (tel === '') { 
            setTel('+7');
        }
    };

    return (
        <BlockStyled>
            <DFlexStyled>
                <div className="top">
                    <TextStyled>Личная информация</TextStyled>
                </div>
                <ChangeStyled>
                    {isEditing ? (
                        <IzmStyled onClick={handleSaveClick}>Сохранить</IzmStyled>
                    ) : (
                        <IzmStyled onClick={handleEditClick}>Изменить</IzmStyled>
                    )}
                </ChangeStyled>
            </DFlexStyled>
            <Lin/>
            <div>
                <FormsStyled>
                    <FormsInFormStyled>
                        <FormStyled name="user_name" action="#" method="get">
                            <InputStyled
                                type="text"
                                name="user_name"
                                placeholder="Ваше имя:"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={!isEditing}
                            />
                        </FormStyled>
                        <FormStyled name="user_surname" action="#" method="get">
                            <InputStyled
                                type="text"
                                name="user_surname"
                                placeholder="Ваша фамилия:"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                disabled={!isEditing}
                            />
                        </FormStyled>
                    </FormsInFormStyled>
                    <FormsInFormStyled>
                        <FormStyled name="user_tel" action="#" method="get">
                            <InputStyled
                                type="tel"
                                name="user_tel"
                                placeholder="Ваш номер телефона:"
                                value={tel}
                                onChange={handleTelChange}
                                onFocus={handleTelFocus}
                                disabled={!isEditing}
                            />
                        </FormStyled>
                        <FormStyled name="user_mail" action="#" method="get">
                            <InputStyled
                                type="email"
                                name="user_mail"
                                placeholder="Ваш Email:"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={!isEditing}
                            />
                        </FormStyled>
                    </FormsInFormStyled>
                    <FormsInFormStyled>
                        <FormStyled name="user_login" action="#" method="get">
                            <InputStyled
                                type="text"
                                name="user_login"
                                placeholder="Ваш логин:"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                disabled={!isEditing}
                            />
                        </FormStyled>
                        <FormStyled name="user_date" action="#" method="get">
                            <InputStyled
                                type="date"
                                name="user_date"
                                placeholder="Ваша дата рождения:"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                disabled={!isEditing}
                            />
                        </FormStyled>
                    </FormsInFormStyled>   
                </FormsStyled>
            </div>
            <Er>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </Er>
        </BlockStyled>
    );
}