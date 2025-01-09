import React, { useState } from 'react';
import { useCommentsPageQuery, useUpdateLikeMutation } from '../../../_data_/service/main-api';
import CommentComponent from './comment/comment';
import { CommentsContainer, CommentsTitle, CommentBlock } from './comment-section.styled';
import ShowMoreButton from './show-more-button/show-more-button';
import { Comment } from '../../../_data_/model/common_comments';
import {mainApi} from '../../../_data_/service/main-api'

export type CommentsSectionProps = {
  comments?: Comment[];
};

const CommentsSection: React.FC<CommentsSectionProps> = () => {
  const { data: queryData } = useCommentsPageQuery();
  const [updateLike] = useUpdateLikeMutation();
  const [sortBy, setSortBy] = useState("likes");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLike = async (username: string, currentLikes: number) => {
    try {
      // Оптимистичное обновление
      console.log("Отправляем запрос:", { username, likes: currentLikes + 1 });

      await updateLike({ username, likes: currentLikes + 1 });
    } catch (error) {
      console.error("Ошибка при обновлении лайков:", error);
    }
  };
  

  // Сортировка комментариев
  const sortedComments =
    queryData?.comments?.slice().sort((a, b) => {
      if (sortBy === 'likes') return b.likes - a.likes;
      if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'negative') return a.rating - b.rating;
      return 0;
    }) || [];

  // Отображение комментариев в зависимости от состояния "показать больше"
  const displayedComments = isExpanded ? sortedComments : sortedComments.slice(0, 2);

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CommentsContainer>
      <CommentsTitle>Комментарии</CommentsTitle>
      <div>
        <label>
          Сортировать по:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="likes">Полезные</option>
            <option value="date">Новые</option>
            <option value="rating">Положительные</option>
            <option value="negative">Отрицательные</option>
          </select>
        </label>
      </div>
      <CommentBlock>
        {displayedComments.map((comment) => (
          <CommentComponent
            key={comment.username}
            username={comment.username}
            rating={comment.rating}
            text={comment.text}
            likes={comment.likes}
            date={comment.date}
            onLike={() => handleLike(comment.username, comment.likes)}
          />
        ))}
      </CommentBlock>
      {sortedComments.length > 2 && (
        <ShowMoreButton onClick={handleShowMore} isExpanded={isExpanded} />
      )}
    </CommentsContainer>
  );
};

export default CommentsSection;
