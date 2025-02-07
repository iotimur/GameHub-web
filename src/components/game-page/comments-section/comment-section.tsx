import React from 'react';
import { useForm } from 'react-hook-form';
import { useCommentsPageQuery, useUpdateLikeMutation } from '../../../_data_/service/main-api';
import CommentComponent from './comment/comment';
import { CommentsContainer, CommentsTitle, CommentBlock } from './comment-section.styled';
import ShowMoreButton from './show-more-button/show-more-button';
import { Comment } from '../../../_data_/model/common_comments';
import { useTranslation } from 'react-i18next';
import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/Images_main/something_wrong_cat.json";
import errorAnimation from "../../../assets/Images_main/error_dog.json";
// import config from '../../../../bro.config.js';

// const isSortEnabled = config?.features?.["gamehub"]?.["sort-comments"]?.on ?? true;

export type CommentsSectionProps = {
  comments?: Comment[];
};

const CommentsSection: React.FC<CommentsSectionProps> = () => {
  const { t } = useTranslation();
  const { data: queryData, isFetching, isLoading, error  } = useCommentsPageQuery();
  const [updateLike] = useUpdateLikeMutation();
  
  const { register, watch } = useForm({
    defaultValues: {
      sortBy: "likes",
    },
  });

  const sortBy = watch("sortBy");
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleLike = async (username: string, currentLikes: number) => {
    try {
      console.log("Отправляем запрос:", { username, likes: currentLikes + 1 });
      await updateLike({ username, likes: currentLikes + 1 });
    } catch (error) {
      console.error("Ошибка при обновлении лайков:", error);
    }
  };


    // Если идет загрузка, показываем анимацию
    if (isFetching || isLoading) {
      return (
        <CommentsContainer style={{ textAlign: "center" }}>
          <Lottie animationData={loadingAnimation} style={{ width: 150, height: 150 }} />
          <p>{t('comments_loading')}</p>
        </CommentsContainer>
      );
    }
  
    // Если произошла ошибка, показываем анимацию ошибки
    if (error) {
      return (
        <CommentsContainer style={{ textAlign: "center" }}>
          <Lottie animationData={errorAnimation} style={{ width: 150, height: 150 }} />
          <p>{t('comments_error')}</p>
        </CommentsContainer>
      );
    }
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
      <CommentsTitle>{t('comments_title')}</CommentsTitle>
      <div>
        <label>
          {t('comments_sort_by')}
          <select {...register("sortBy")}>
            <option value="likes">{t('comments_sort_likes')}</option>
            <option value="date">{t('comments_sort_date')}</option>
            <option value="rating">{t('comments_sort_positive')}</option>
            <option value="negative">{t('comments_sort_negative')}</option>
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
