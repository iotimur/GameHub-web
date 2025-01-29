import React from 'react';
import {But, ZagolovStyle} from './favourites.styled';
import { Link } from 'react-router-dom';

export function Fv() {
    return (
        <But>
            <Link to="/gamehub/favourites">
                <ZagolovStyle>Избранное</ZagolovStyle>
            </Link>
        </But>
        
    );
}