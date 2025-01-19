import React from 'react';
import {
  Comment,
  Avatar,
  CommentContent,
  CommentName,
  CommentText,
  LikeButton,
  CommentDate,
} from './comment.styled';

export type CommentComponentProps = {
  username: string;
  text: string;
  likes: number;
  rating: number;
  date: string;
  onLike: () => void;
};

export function CommentComponent({
  username,
  text,
  likes,
  rating,
  onLike,
  date,
}: CommentComponentProps) {
  return (
    <Comment>
      <Avatar />
      <CommentContent>
        <CommentText>{`${rating}/10`}</CommentText>

        <CommentName>{username}</CommentName>
        <CommentText>{text}</CommentText>
        <CommentDate>{new Date(date).toLocaleDateString()}</CommentDate>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LikeButton onClick={onLike}>👍</LikeButton>
          <span>{likes}</span>
        </div>
      </CommentContent>
    </Comment>
  );
}

export default CommentComponent;
