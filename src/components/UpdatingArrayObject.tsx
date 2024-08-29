import { produce } from "immer";
import { useState } from "react";

const UpdatingArrayObject = () => {
  const [trees, setTrees] = useState([
    {
      id: 1,
      treeName: "Mango",
      produceFruits: false,
      producedFruits: "No",
    },
  ]);

  const handleClick = () => {
    setTrees(
      produce((draft) => {
        const tree = draft.find((tree) => tree.id === 1);
        if (tree) tree.produceFruits = true;
      })
    );
  };

  return (
    <div>
      {trees.map((tree) => (
        <p key={tree.id}>
          {tree.treeName}
          {tree.produceFruits ? "  Produced Fruits" : " Produced No Fruits"}
        </p>
      ))}
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UpdatingArrayObject;
