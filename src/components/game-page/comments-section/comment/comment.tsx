import React from 'react';
import { Comment, Avatar, CommentContent, CommentName, CommentText } from './comment.styled';

export function CommentComponent({ username, text }) {
    return (
        <Comment>
            <Avatar />
            <CommentContent>
                <CommentName>{username}</CommentName>
                <CommentText>{text}</CommentText>
            </CommentContent>
        </Comment>
    );
}

export default CommentComponent;
