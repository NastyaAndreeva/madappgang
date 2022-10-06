import { DragonList } from 'components/DragonList';
import { Box } from 'components/ui/Box';
import { Container } from 'components/ui/Container';
import { Link } from 'components/ui/Link';
import { StyledContainer } from 'components/ui/StyledContainer';
import { useAuth, useRedux } from 'hooks';
import { useEffect } from 'react';
import { dragonsOperations, dragonsSelectors } from 'store/dragons';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const [dispatch, selector] = useRedux();
  const dragons = selector(dragonsSelectors.getAllDragons);

  useEffect(() => {
    dispatch(dragonsOperations.getAllDragons());
  }, [dispatch]);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="100px"
      >
        <h1>Welcome to the dragons website</h1>
        <DragonList dragons={dragons} action="Add" />
        {isLoggedIn ? (
          <Link to="/dragons">The preffered dragons page</Link>
        ) : (
          <StyledContainer>
            To view your preffered dragons, please,
            <Link to="/login">Log In</Link>or
            <Link to="/register">Sign Up</Link>
          </StyledContainer>
        )}
      </Box>
    </Container>
  );
};

export default Home;
