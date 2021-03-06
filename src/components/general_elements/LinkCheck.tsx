import React, { useEffect, useState } from "react";
import { BiError, BiHistory } from "react-icons/bi";
import { GiDiceTwentyFacesTwenty, GiSwordsPower } from "react-icons/gi";
import { recivePromiseByAttributeCount } from "../../services/DatabaseService";

interface $Props {
  type: string;
  name: string;
}

const LinkCheck = ({ type, name }: $Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [entitiyFound, setEntity] = useState<boolean>(false);

  useEffect(() => {
    if (type === "dice") {
      setEntity(true);
      setLoading(false);
    } else {
      let newType = type + "s";
      if (type === "class" || type === "subclass") newType = type + "es";
      recivePromiseByAttributeCount(newType, "name", name)
        .then((count: number) => {
          setEntity(count > 0);
          setLoading(false);
        })
        .catch(() => {
          setEntity(false);
          setLoading(false);
        });
    }
  }, [type, name]);

  const formatIcon = (type: string) => {
    switch (type) {
      case "talent":
        return <GiSwordsPower />;
      case "dice":
        return <GiDiceTwentyFacesTwenty />;
      default:
        return "";
    }
  };

  return (
    <>
      {loading && <BiHistory />}
      {!loading && !entitiyFound && <BiError />}
      {!loading && entitiyFound && <>{formatIcon(type)}</>}
    </>
  );
};

export default LinkCheck;
