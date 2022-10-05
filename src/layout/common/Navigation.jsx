import React from 'react';
import { useAuth } from 'hooks';
import { Link as StyledLink } from 'components/ui/Link';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      {isLoggedIn && <StyledLink to="/dragons">Dragons</StyledLink>}
    </nav>
  );
};

export default Navigation;
