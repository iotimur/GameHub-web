import styled from "@emotion/styled";

export const Comment = styled.div`
    background-color: #072149;
    border-bottom: 2px solid #4874B2;
    width: 520px;
    min-height: 139px;
    height: 139px;
    margin-bottom: 10px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
`;

export const Avatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #18396C;
    margin-top: 15px;
    margin-right: 15px;
`;

export const CommentContent = styled.div`
    flex: 1; /* Занимаем доступное пространство */
`;

export const CommentName = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const CommentText = styled.div`
    font-style: italic;
`;
