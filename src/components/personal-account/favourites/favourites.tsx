import React from 'react';
import {ZagolovStyle} from './favourites.styled';
import { Link } from 'react-router-dom';

export function Fv() {
    return (
        <Link to="/gamehub/favourites">
            <ZagolovStyle>Избранное</ZagolovStyle>
        </Link>
    );
}