import React from 'react';
import { Comment } from './comment/comment';
import { CommentsContainer, CommentsTitle, CommentBlock, ShowMoreButton } from './comment-section.styled';

const comments = [
    { username: 'Пользователь1', text: 'Текст комментария 1' },
    { username: 'Пользователь2', text: 'Текст комментария 2' },
    { username: 'Пользователь3', text: 'Текст комментария 3' },
    { username: 'Пользователь4', text: 'Текст комментария 4' },
];

const CommentsSection = ({ comments }) => {
    return (
        <CommentsContainer>
            <CommentsTitle>Комментарии</CommentsTitle>
            <CommentBlock>
                {comments.map((comment, index) => (
                    <Comment key={index} username={comment.username} text={comment.text} />
                ))}
            </CommentBlock>
            
            <ShowMoreButton>Показать больше</ShowMoreButton>
        </CommentsContainer>
    );
};

export default CommentsSection;

