import SingleCharacter from '../../src/components/features/characters/SingleCharacter/SingleCharacter';
import Layout from '../../src/components/shared/layouts/Layout/Layout';
import withAuth from '../../src/components/shared/utilities/Auth';

// Single Character page
const SingleCharacterPage = () => {
  return (
    <Layout title="Characters">
      <SingleCharacter />
    </Layout>
  );
};

export default withAuth(SingleCharacterPage);
