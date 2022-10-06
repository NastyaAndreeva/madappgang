import { Button } from 'components/ui/Button';
import { Link } from 'components/ui/Link';
import { useAuth, useRedux } from 'hooks';
import { addDragon, deleteDragon } from 'store/dragons/dragons-slice';
import {
  DragonListItem,
  DragonListStyled,
  DragonListImage,
} from './DragonList.styled';

export const DragonList = ({ dragons, action }) => {
  const { isLoggedIn } = useAuth();
  const [dispatch] = useRedux();

  return (
    <DragonListStyled>
      {dragons?.map(({ id, name, flickr_images }) => (
        <DragonListItem key={id}>
          <Link to={`/dragons/${id}`}>
            {name}: <DragonListImage src={flickr_images[0]} alt="Dragon" />
          </Link>

          <Button
            type="button"
            disabled={!isLoggedIn}
            onClick={() =>
              dispatch(
                action === 'Add'
                  ? addDragon({ id, name, flickr_images })
                  : deleteDragon(id)
              )
            }
          >
            {action}
          </Button>
        </DragonListItem>
      ))}
    </DragonListStyled>
  );
};
