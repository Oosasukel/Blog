import { DiscussionEmbed } from 'disqus-react';

interface DisqusCommentsProps {
  post: {
    id: string;
    title: string;
  };
}

const DisqusComments = ({ post }: DisqusCommentsProps) => {
  const disqusShortname = 'rodrigog';
  const disqusConfig = {
    url: `http://localhost:3000/posts/${post.id}`,
    identifier: post.id,
    title: post.title,
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
