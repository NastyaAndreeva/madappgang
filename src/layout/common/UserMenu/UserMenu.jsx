import { useDispatch } from 'react-redux';
import { Box } from 'components/ui/Box';
import { authOperations } from 'store/auth';
import { useAuth } from 'hooks';
import { GreetingsText, LogOutButton } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar =
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/surprising-flower-meanings-balloon-flowers-1650767465.jpg';
  return (
    <Box display="flex" alignItems="center" justifyContanet="center">
      <img src={avatar} alt="" width="32" height="32" />
      <GreetingsText>Welcome, {user?.name}</GreetingsText>
      <LogOutButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </LogOutButton>
    </Box>
  );
}
