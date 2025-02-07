import React from 'react';
import {But, ZagolovStyle} from './exit.styled';
import { Link } from 'react-router-dom';

export function Exit() {
    return (
        <But>
            <Link to="/gamehub/entrance">
                <ZagolovStyle>Выйти</ZagolovStyle>
            </Link>
        </But>
        
    );
}