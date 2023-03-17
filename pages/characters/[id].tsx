import SingleCharacter from '../../src/components/features/characters/SingleCharacter';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';
import withAuth from '../../src/components/shared/utilities/Auth';

// Single Character page
const SingleCharacterPage = () => {
  return (
    <AuthWrapper title="Characters">
      <SingleCharacter />
    </AuthWrapper>
  );
};

export default withAuth(SingleCharacterPage);
