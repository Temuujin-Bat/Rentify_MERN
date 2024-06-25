import { getApartmentsData } from "../../../store/apartments/selectors";

import { UserApartmentsGridNoPosts, UserApartmentsGridPosts } from "../index";

export default function UserApartmentsGrids() {
  const { userApartments } = getApartmentsData();

  return (
    <>
      {userApartments && userApartments.length !== 0 ? (
        <UserApartmentsGridPosts />
      ) : (
        <UserApartmentsGridNoPosts />
      )}
    </>
  );
}
