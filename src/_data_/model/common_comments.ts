export type Comment = {
    username: string;
    text: string;
  };
  
  export type CommentsResponse = {
    comments: Comment[];
  };
  
  export type BaseResponse<Data> =
    | {
        success: true;
        data?: Data;
      }
    | {
        success: false;
        error: string;
      };
  