import React from "react";
import { FaPlus } from "react-icons/fa";
import Create from "../../components/Create/Index";
import { CreateLayoutStyled } from "./style";
import AddCube from "../../components/AddCube/Index";
import CubeBody from "../../components/AddCube/CubeBody";

const Index = () => {

  const [addCubeModal, setAddCubeModal] = React.useState(false);

  return (
    <CreateLayoutStyled>
      {/* <List/> */}
      <div className="plus-icon">
        <FaPlus
          color="white"
          onClick={() => setAddCubeModal(!addCubeModal)}
          fontSize={26}
        />
      </div>
      <Create />
      <AddCube
        addCubeModal={addCubeModal}
        setAddCubeModal={setAddCubeModal}
      >
        <CubeBody />
      </AddCube>
    </CreateLayoutStyled>
  );
};

export default Index;
