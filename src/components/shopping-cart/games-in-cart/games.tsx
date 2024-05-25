import React, { useState, useEffect } from 'react';
import { mortal, ved, fifa } from './index';
import {
    Oval, Container_my, Title1, Title2, Title3, BigImage, Price, Delete, Hr, Total, TotalSpan, Price1
} from '../games-in-cart/games.styled';
import { URLs } from '../../../_data_/urls';

const images = { mortal, fifa, ved };

interface Game {
    id: number;
    title: string;
    image: string;
    alt: string;
    releaseDate: string;
    description: string;
    price: number;
}

const Games: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(`${URLs.api.main}/shopping-cart`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setGames(result.data);
            } catch (error) {
                setError('Ошибка загрузки данных');
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    const handleDelete = (id: number) => {
        setGames(games.filter(game => game.id !== id));
    };

    const totalPrice = games.reduce((total, game) => total + game.price, 0);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <Oval>Ваша корзина</Oval>
            {games.map(game => (
                <Container_my key={game.id}>
                    <BigImage src={images[game.image]} alt={game.alt} />
                    <div>
                        <Title1>{game.title}</Title1>
                        <Price>{game.price} руб.</Price>
                        <Title2>Дата выпуска: {game.releaseDate}</Title2>
                        <Title3>{game.description}</Title3>
                        <Delete onClick={() => handleDelete(game.id)}>Удалить</Delete>
                        <Hr />
                    </div>
                </Container_my>
            ))}
            <Total>
                <TotalSpan>Промежуточный итог:</TotalSpan>
                <Price1>{totalPrice} руб.</Price1>
            </Total>
        </>
    );
};

export default Games;
