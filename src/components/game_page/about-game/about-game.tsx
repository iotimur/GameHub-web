import React from 'react';

import { AboutGameContainerStyled, TitleStyled, SubtitleStyled, TextStyled } from './about-game.styled'

export function AboutGame() {
    return (
        <AboutGameContainerStyled>
            <TitleStyled>Об игре</TitleStyled>
            <SubtitleStyled>Новый фэнтезийный ролевой боевик</SubtitleStyled>
            <TextStyled>Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.</TextStyled>
            <SubtitleStyled>Огромный захватывающий мир</SubtitleStyled>
            <TextStyled>Огромный мир с открытыми полями, множеством ситуаций и гигантскими подземельями, где сложные трёхмерные конструкции сочетаются воедино. Путешествуйте, преодолевайте смертельные опасности и радуйтесь успехам.</TextStyled>
            <SubtitleStyled>Создайте своего персонажа</SubtitleStyled>
            <TextStyled>Вы можете не только изменить внешность персонажа, но также комбинировать оружие, броню и предметы. Развивайте персонажа по своему вкусу. Наращивайте мышцы или постигайте таинства магии.</TextStyled>
            <SubtitleStyled>Эпическая драма, выросшая из мифа</SubtitleStyled>
            <TextStyled>Многослойная история, разбитая на фрагменты. Эпическая драма, в которой мысли персонажей пересекаются в Междуземье.</TextStyled>
            <SubtitleStyled>Уникальный сетевой режим, приближающий вас к другим игрокам</SubtitleStyled>
            <TextStyled>Помимо многопользовательского режима, в котором вы напрямую подключаетесь к другим игрокам и путешествуете вместе, есть асинхронный сетевой режим, позволяющий ощутить присутствие других игроков.</TextStyled>
        </AboutGameContainerStyled>
    );
}
