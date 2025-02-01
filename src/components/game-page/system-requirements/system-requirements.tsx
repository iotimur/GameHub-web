import React from 'react';
import { useTranslation } from 'react-i18next';

import { 
    SystemRequirementsContainer, 
    Title, 
    ColumnsWrapper, 
    Column, 
    Subtitle, 
    RequirementsList, 
    RequirementItem 
} from './system-requirements.styled';

const SystemRequirements = () => {
    const { t } = useTranslation();

    return (
        <SystemRequirementsContainer>
            <Title>{t('requirements_title')}</Title>
            <ColumnsWrapper>
                <Column>
                    <Subtitle>{t('requirements_recommended')}</Subtitle>
                    <RequirementsList>
                        <RequirementItem>{t('requirements_recommended_1')}</RequirementItem>
                        <RequirementItem>{t('requirements_recommended_2')}</RequirementItem>
                        <RequirementItem>{t('requirements_recommended_3')}</RequirementItem>
                        <RequirementItem>{t('requirements_recommended_4')}</RequirementItem>
                        <RequirementItem>{t('requirements_recommended_5')}</RequirementItem>
                        <RequirementItem>{t('requirements_recommended_6')}</RequirementItem>
                        <RequirementItem>{t('requirements_recommended_7')}</RequirementItem>
                        <RequirementItem>{t('requirements_recommended_8')}</RequirementItem>
                    </RequirementsList>
                </Column>
                <Column>
                    <Subtitle>{t('requirements_minimum')}</Subtitle>
                    <RequirementsList>
                        <RequirementItem>{t('requirements_minimum_1')}</RequirementItem>
                        <RequirementItem>{t('requirements_minimum_2')}</RequirementItem>
                        <RequirementItem>{t('requirements_minimum_3')}</RequirementItem>
                        <RequirementItem>{t('requirements_minimum_4')}</RequirementItem>
                        <RequirementItem>{t('requirements_minimum_5')}</RequirementItem>
                        <RequirementItem>{t('requirements_minimum_6')}</RequirementItem>
                        <RequirementItem>{t('requirements_minimum_7')}</RequirementItem>
                        <RequirementItem>{t('requirements_minimum_8')}</RequirementItem>
                    </RequirementsList>
                </Column>
            </ColumnsWrapper>
        </SystemRequirementsContainer>
    );
};

export default SystemRequirements;
