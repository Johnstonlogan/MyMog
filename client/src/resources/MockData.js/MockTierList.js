import { MageMog } from "../../images/MageMog.jpg";
import { Druid } from "../../images/Druid.jpg";
import { Mage } from "../../images/Mage.jpg";
import { Priest } from "../../images/Priest.jpg";
import { Pally } from "../../images/BertPally.jpg";

export const TierListData = () => {
  const tierData = [
    { userId: 1, userName: "UserNumba1", userImage: MageMog },
    { PuserId: 2, userName: "UserNumba2", userImage: Druid },
    { userId: 3, userName: "UserNumba3", userImage: Mage },
    { userId: 4, userName: "UserNumba4", userImage: Priest },
    { userId: 5, userName: "UserNumba5", userImage: Pally },
  ];
  return tierData;
};
