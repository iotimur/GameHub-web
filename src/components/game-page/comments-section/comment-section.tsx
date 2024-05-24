// comment-section.tsx
import React, { useState } from 'react';
import { Comment } from './comment/comment';
import { CommentsContainer, CommentsTitle, CommentBlock } from './comment-section.styled';
import ShowMoreButton from './show-more-button/show-more-button';

const CommentsSection = ({ comments }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedComments = isExpanded ? comments : comments.slice(0, 2);

  return (
    <CommentsContainer>
      <CommentsTitle>Комментарии</CommentsTitle>
      <CommentBlock>
        {displayedComments.map((comment, index) => (
          <Comment key={index} username={comment.username} text={comment.text} />
        ))}
      </CommentBlock>
      {comments.length > 2 && (
        <ShowMoreButton onClick={handleShowMore} isExpanded={isExpanded} />
      )}
    </CommentsContainer>
  );
};

export default CommentsSection;


