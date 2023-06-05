import { useEffect, useState } from 'react';
import CommentBox from '../CommentBox';
// import { fetchComments } from '../../services/axios';
import './styles.scss';
import { Box } from '@mui/material';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const ListComments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const response = []//await fetchComments();
      setComments(response);
    } catch (error) {
      alert('algo deu errado');
    }
  };

  return (
    <div className="container">
      <h1>Comentários</h1>
      <Box sx={{ maxHeight: '80vh', overflowY: 'overlay', px: '1rem' }}>
        {comments.length > 0 &&
          comments.map((comment: Comment) => (
            <CommentBox key={comment.id} comments={comment} />
          ))}
      </Box>
    </div>
  );
};

export default ListComments;
