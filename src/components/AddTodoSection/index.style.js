import { styled } from "styled-components";
export const AddTodoBox = styled.section`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`
export const AddTodoInput = styled.input`
  flex: 0 0 85%;
  height: 100%;
  border: 2px #023e8a solid;
  border-radius: 15px ;
  padding-left:15px ;
`
export const AddTodoBtn = styled.button`
  flex: 0 0 14%;
  height: 100%;
  font-size: 14px;
  background-color: #2a9d8f;
  border-radius: 15px;
  color:white ;
  border: none;
  &:active{
    box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform: scale(.95);
  }
`
