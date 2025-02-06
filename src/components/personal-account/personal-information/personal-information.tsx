import React from 'react';
import { useTranslation } from 'react-i18next';
import { DFlexStyled, FormsStyled, Lin, IzmStyled, TextStyled, BlockStyled, InputStyled, ChangeStyled, FormStyled, FormsInFormStyled } from './personal-information.styled';

export function PersonalInformation() {
    const { t } = useTranslation();

    return (
        <BlockStyled>
            <DFlexStyled>
                <div className="top">
                    <TextStyled>{t("personal_info")}</TextStyled>
                </div>
                <ChangeStyled>
                    <IzmStyled>{t("edit")}</IzmStyled>
                </ChangeStyled>
            </DFlexStyled>
            <Lin />
            <div>
                <FormsStyled>
                    <FormsInFormStyled>
                        <FormStyled name="user_name" action="#" method="get">
                            <InputStyled type="text" name="user_name" placeholder={t("your_name")} />
                        </FormStyled>
                        <FormStyled name="user_surname" action="#" method="get">
                            <InputStyled type="text" name="user_surname" placeholder={t("your_surname")} />
                        </FormStyled>
                    </FormsInFormStyled>
                    <FormsInFormStyled>
                        <FormStyled name="user_tel" action="#" method="get">
                            <InputStyled type="tel" name="user_tel" placeholder={t("your_phone")} />
                        </FormStyled>
                        <FormStyled name="user_mail" action="#" method="get">
                            <InputStyled type="email" name="user_mail" placeholder={t("your_email")} />
                        </FormStyled>
                    </FormsInFormStyled>
                    <FormsInFormStyled>
                        <FormStyled name="user_login" action="#" method="get">
                            <InputStyled type="text" name="user_login" placeholder={t("your_login")} />
                        </FormStyled>
                        <FormStyled name="user_date" action="#" method="get">
                            <InputStyled type="datetime" name="user_date" placeholder={t("your_birth_date")} />
                        </FormStyled>
                    </FormsInFormStyled>
                </FormsStyled>
            </div>
        </BlockStyled>
    );
}
