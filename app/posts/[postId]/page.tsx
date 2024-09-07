import React from 'react';

type Props = {
  params: {
    postId: string;
  };
};

const PostPage: React.FC<Props> = ({ params }) => {
  const { postId } = params;

  return (
    <div>
      <h1>Post ID number: {postId}</h1>
      {/* Additional post content goes here */}
    </div>
  );
};

export default PostPage;








