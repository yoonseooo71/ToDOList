import { styled } from "styled-components";
export const Wrapper = styled.article`
  width: 100%;
  border: #48cae4 2px solid;
  border-radius: 15px;
  padding: 5px;
  font-size: 18px;
  display: flex;
  margin: 10px 0;
  display: flex;
`;
export const IdBox = styled.div`
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextBox = styled.div`
  flex: 0 0 72%;
  display: flex;
  flex-direction: column;
  word-break:break-all;
  white-space: ${({$isInfo})=>$isInfo===true?"none":"nowrap"};
  overflow: ${({$isInfo})=>$isInfo===true?"none":"hidden"};
`;
export const Text = styled.div`
  width: 100%;
  text-decoration: ${({checked})=>{if (checked===true) return "line-through"}};
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Info = styled.div`
  width: 100%;
  font-size: 0.7em;
  opacity: 60%;
  margin-top: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const IconBox = styled.div`
  flex: 0 0 18%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CheckBox = styled.input`
  width: 17px;
  height: 17px;
  margin: 5px;
`;
export const EditInput = styled.input`
  flex: 0 0 72%;
  height: 40px;
`