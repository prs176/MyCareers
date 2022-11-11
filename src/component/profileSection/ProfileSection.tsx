import { User } from "../../models/user";
import CommonProfileSection from "./CommonProfileSection";
import EditProfileSection from "./EditProfileSection";

interface Props {
  type: "common" | "my" | "edit";
  user: User;
  isGood: boolean;
  onEdit: () => void;
  onEditDone: (name: string, birth: string, intro: string) => void;
  onGood: () => void;
  onNotGood: () => void;
}

const ProfileSection = ({
  type,
  user,
  isGood,
  onEdit,
  onEditDone,
  onGood,
  onNotGood,
}: Props): JSX.Element => {
  return (
    <>
      {type === "edit" ? (
        <EditProfileSection user={user} onEditDone={onEditDone} />
      ) : (
        <CommonProfileSection
          type={type}
          user={user}
          isGood={isGood}
          onEdit={onEdit}
          onGood={onGood}
          onNotGood={onNotGood}
        />
      )}
    </>
  );
};

export default ProfileSection;
