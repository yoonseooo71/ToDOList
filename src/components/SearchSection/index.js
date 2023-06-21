import { useRef, useState } from "react";
import { ExpandLessIcon,ExpandMoreIcon } from "../../asset/img/svg";
import {
  IconBox,
  Option,
  OptionBox,
  OptionBtn,
  OptionCheck,
  OptionInput,
  Search,
  SearchBox,
  SearchAnimationIcon,
  Wrapper,
} from "./index.style";

function SearchSection({todoData,isSearch, setSearchData, setIsSearch,setPage,setBtnPage}) {
  const [isOption, setIsoption] = useState(false);
  const searchRef = useRef(); 
  const optionRef = useRef([]);
  const svgStyle = {style:{width: "40px", height: "40px"}}
  /**검색이밴트  */ 
  function searchEvent() {
    const text = searchRef.current.value ;
    let searchData = [] ; 
    if(isOption === false) {
      searchData = todoData.filter((data)=>data.text.includes(text));
    } else {
      const checkbox = optionRef.current[0].checked ; 
      const dateFrom = optionRef.current[1].value ;
      const dateTo = optionRef.current[2].value ;
      searchData = todoData.filter((data)=>data.text.includes(text));
      if (checkbox === true) {
        searchData = searchData.filter((data)=>data.checked === true)  ;
      } 
      if (dateFrom.length>0 && dateTo.length >0) {
        const numFrom = parseInt(dateFrom.replaceAll("-",""));
        const numTo = parseInt(dateTo.replaceAll("-",""));
        searchData = searchData.filter((data)=>numFrom <= parseInt(data.createdDate.replaceAll("-","")) && parseInt(data.createdDate.replaceAll("-","")) <= numTo);
      }
    }
    setSearchData(searchData);
    setPage(1);
    setBtnPage(1);
    setIsSearch(true);
    
    /**로컬스토리지 에도 데이터저장 */
    const searchDataJson = JSON.stringify(searchData);
    localStorage.setItem("searchData", searchDataJson);
    localStorage.setItem("isSearch",true);
    localStorage.setItem("page", 1);
    localStorage.setItem("btnPage", 1);
  }

  /**초기화 버튼을 눌러 전체 데이터 띄우는 이벤트*/
  function resetEvent() {
    if (isSearch) {
      setIsSearch(false);
      setPage(1);
      setBtnPage(1);
      localStorage.setItem("isSearch",false);
      localStorage.setItem("page", 1);
      localStorage.setItem("btnPage", 1);
    }
  }

  return (
    <Wrapper>
      <SearchBox isoption={isOption.toString()}>
        <Search ref={searchRef} placeholder="검색할내용을 입력해주세요"/> 
        <IconBox>
          <SearchAnimationIcon onClick={searchEvent}/>
          {isOption ? (
            <ExpandLessIcon {...svgStyle} onClick={() => setIsoption(!isOption)} />
          ) : (
            <ExpandMoreIcon {...svgStyle} onClick={() => setIsoption(!isOption)} />
          )}
        </IconBox>
      </SearchBox>
      {isOption && (
        <OptionBox>
          <Option>
            완료 옵션:
            <OptionCheck type="checkbox" ref={(el)=>optionRef.current[0] = el} />
          </Option>
          <Option>
            날짜 옵션:
            <OptionInput type="date" ref={(el)=>optionRef.current[1] = el}/>
            ~ 
            <OptionInput type="date" ref={(el)=>optionRef.current[2] = el}/>
          </Option>
          <OptionBtn onClick={resetEvent}>검색 초기화</OptionBtn>
        </OptionBox>
      )}
    </Wrapper>
  );
}

export default SearchSection;
