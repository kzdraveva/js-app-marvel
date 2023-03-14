import SingleCharacter from '../../src/components/features/characters/SingleCharacter';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';

// Single Character page
export default function SingleCharacterPage() {
  return (
    <AuthWrapper title="Characters">
      <SingleCharacter />
    </AuthWrapper>
  );
}
