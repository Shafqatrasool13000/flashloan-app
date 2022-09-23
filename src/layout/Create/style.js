import styled from "styled-components";
import { primaryColor } from "../../components/Global";

export const CreateLayoutStyled=styled.div`

.plus-icon{
  position: absolute;
  right: 10%;
  top: 10%;
  background-color: ${primaryColor};
  border-radius: 50%;
  padding: 14px;
  width: 50px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
`