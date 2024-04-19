import React from 'react';
import { Comment } from './comment/comment';
import './comment-section.css';

const CommentsSection = () => {
    return (
        <div className="comments-section">
            <h2 className="comments-title">Комментарии</h2>
            <div className="comment-block">
                <Comment username="Имя пользователя" text="Текст комментария" />
                <Comment username="Имя пользователя" text="Текст комментария" />
                <Comment username="Имя пользователя" text="Текст комментария" />
                <Comment username="Имя пользователя" text="Текст комментария" />
            </div>
            
            <button className="show-more-button">Показать больше</button>
        </div>
    );
};

export default CommentsSection;
