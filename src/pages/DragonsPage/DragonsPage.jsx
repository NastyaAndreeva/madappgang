import { Box } from 'components/ui/Box';
import { useRedux } from 'hooks';
import { Label } from 'components/ui/Label';
import { Heading } from 'components/ui/Heading';
import { DragonList } from 'components/DragonList';
import { Container } from 'components/ui/Container';
import { getFavouriteDragons } from 'store/dragons/dragons-slice';

const DragonsPage = () => {
  const [selector] = useRedux();
  const favouriteDragons = selector(getFavouriteDragons);

  return (
    <Container>
      <Box
        marginTop="100px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        as="section"
      >
        <Heading>Dragon list</Heading>
        <Label htmlFor="filter"></Label>
        {favouriteDragons?.length !== 0 && (
          <DragonList dragons={favouriteDragons} action="Delete" />
        )}
      </Box>
    </Container>
  );
};

export default DragonsPage;
