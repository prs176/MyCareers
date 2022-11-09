import { User } from "../../models/user";
import CommonProfileSection from "./CommonProfileSection";
import EditProfileSection from "./EditProfileSection";

interface Props {
  type: "common" | "my" | "edit";
  user: User;
  onEdit: () => void;
  onEditDone: () => void;
}

const ProfileSection = ({ type, user, onEdit, onEditDone }: Props): JSX.Element => {
  return (
    <>
      {type === "edit" ? (
        <EditProfileSection user={user} onEditDone={onEditDone} />
      ) : (
        <CommonProfileSection type={type} user={user} onEdit={onEdit} />
      )}
    </>
  );
};

export default ProfileSection;
