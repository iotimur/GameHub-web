import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DFlexStyled, FormsStyled, Lin, IzmStyled, TextStyled, BlockStyled, InputStyled, ChangeStyled, FormStyled, FormsInFormStyled, Er } from './personal-information.styled';

export function PersonalInformation() {
    const { t } = useTranslation();
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
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
            setError(t('personal_information_phone_error_invalid'));
            return;
        }

        const telWithoutPlus7 = tel.startsWith('+7') ? tel.slice(2) : tel;

        if (telWithoutPlus7.length !== 10) {
            setError(t('personal_information_phone_error_length'));
            return;
        }

        if (!isValidEmail(email)) {
            setError(t('personal_information_email_error_invalid'));
            return;
        }

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
                    <TextStyled>{t('personal_information_title')}</TextStyled>
                </div>
                <ChangeStyled>
                    {isEditing ? (
                        <IzmStyled onClick={handleSaveClick}>{t('personal_information_save_button')}</IzmStyled>
                    ) : (
                        <IzmStyled onClick={handleEditClick}>{t('personal_information_edit_button')}</IzmStyled>
                    )}
                </ChangeStyled>
            </DFlexStyled>
            <Lin />
            <div>
                <FormsStyled>
                    <FormsInFormStyled>
                        <FormStyled name="user_name" action="#" method="get">
                            <InputStyled
                                type="text"
                                name="user_name"
                                placeholder={t('personal_information_name_placeholder')}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={!isEditing}
                            />
                        </FormStyled>
                        <FormStyled name="user_surname" action="#" method="get">
                            <InputStyled
                                type="text"
                                name="user_surname"
                                placeholder={t('personal_information_surname_placeholder')}
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
                                placeholder={t('personal_information_phone_placeholder')}
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
                                placeholder={t('personal_information_email_placeholder')}
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
                                placeholder={t('personal_information_login_placeholder')}
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                disabled={!isEditing}
                            />
                        </FormStyled>
                        <FormStyled name="user_date" action="#" method="get">
                            <InputStyled
                                type="date"
                                name="user_date"
                                placeholder={t('personal_information_dob_placeholder')}
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
