import NewComment from "./comments/components/NewComment.tsx";
import Comments from './comments/containers/Comments.tsx';
import { Container } from '@mui/material';

const App = () => (
    <Container maxWidth="xl" component="main">
      <NewComment />
      <Comments />
    </Container>
);

export default App
