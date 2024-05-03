import React from 'react';
import { DFlexStyled, FormsStyled, IzmStyled, TextStyled, BlockStyled, InputStyled, ChangeStyled, FormStyled, FormsInFormStyled } from './personal-information.styled'

export function PersonalInformation() {
    return (
        <BlockStyled>
            <DFlexStyled>
                <div className="top">
                    <TextStyled>Личная информация</TextStyled>
                </div>
                <ChangeStyled>
                    <IzmStyled>Изменить</IzmStyled>
                </ChangeStyled>
            </DFlexStyled>
            <hr />
            <div>
                <FormsStyled>
                    <FormsInFormStyled>
                        <FormStyled name="user_name" action="#" method="get">
                            <InputStyled type="text" name="user_name" placeholder="Ваше имя:" />
                        </FormStyled>
                        <FormStyled name="user_surname" action="#" method="get">
                            <InputStyled type="text" name="user_surname" placeholder="Ваша фамилия:" />
                        </FormStyled>
                    </FormsInFormStyled>
                    <FormsInFormStyled>
                        <FormStyled name="user_tel" action="#" method="get">
                            <InputStyled type="tel" name="user_tel" placeholder="Ваш номер телефона:" />
                        </FormStyled>
                        <FormStyled name="user_mail" action="#" method="get">
                            <InputStyled type="email" name="user_mail" placeholder="Ваш Email:" />
                        </FormStyled>
                    </FormsInFormStyled>
                    <FormsInFormStyled>
                        <FormStyled name="user_name" action="#" method="get">
                            <InputStyled type="text" name="user_login" placeholder="Ваш логин:" />
                        </FormStyled>
                        <FormStyled name="user_surname" action="#" method="get">
                            <InputStyled type="datetime" name="user_date" placeholder="Ваша дата рождения:" />
                        </FormStyled>
                    </FormsInFormStyled>
                </FormsStyled>
            </div>
        </BlockStyled>
    );
}

