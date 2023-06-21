import { styled } from "styled-components";
import { SearchIcon } from "../../asset/img/svg";
export const Wrapper = styled.section`
  width: 100%;
  border-radius: 15px;
`
export const SearchBox = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px #023e8a solid;
  border-radius: ${({isoption})=> isoption==="true" ? "15px 15px 0 0" : "15px"}; ;
`;
export const Search = styled.input`
  flex: 0 0 85%;
  height: 40px;
  border-radius: 15px 0 0 15px ;
  padding-left:15px ;
`
export const IconBox = styled.div`
  flex: 0 0 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const SearchAnimationIcon = styled(SearchIcon)`
  width: 30px;
  height: 30px;
  &:active{
    transform: scale(.95);
  }
`
export const OptionBox = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px #023e8a solid;
  border-top: none;
  border-radius: 0 0 15px 15px;
  padding: 15px;
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`
export const OptionCheck =styled.input`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`
export const OptionInput = styled.input`
  height: 30px;
  border: 2px #023e8a solid;
  border-radius: 5px;
  margin: 0 10px;
`
export const OptionBtn = styled.button`
  min-width: 40px;
  height: 30px;
  font-size: 1em;
  border: 2px #023e8a solid;
  border-radius: 5px;
  color:black ;
  background-color: #FEFEFE;
  &:active{
    box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform: scale(.95);
  }
`

