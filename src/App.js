import { styled } from "styled-components";
import SearchSection from "./components/SearchSection";
import AddTodoSection from "./components/AddTodoSection";
import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
function App() {
  const [searchData, setSearchData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const [id, setId] = useState(1);
  /**페이지네이션 state */
  const [page, setPage] = useState(1);
  const [btnPage, setBtnPage] = useState(1); //페이지네이션 버튼페이지 state
  const limit = 5;
  const offset = (page - 1) * limit;

  /**새로고침할때 localStorage에서 데이터 가져오기 */
  useEffect(() => {
    const localTodoData = localStorage.getItem("todoData");
    const localSearchData = localStorage.getItem("searchData");
    const localIsSearch = localStorage.getItem("isSearch");
    const localId = localStorage.getItem("id");
    const localPage = localStorage.getItem("page");
    const localBtnPage = localStorage.getItem("btnPage");
    if (localTodoData !== null) setTodoData(JSON.parse(localTodoData));
    if (localSearchData !== null) setSearchData(JSON.parse(localSearchData));
    if (localIsSearch !== null) setIsSearch(JSON.parse(localIsSearch));
    if (localId !== null) setId(parseInt(localId));
    if (localPage !== null) setPage(parseInt(localPage));
    if (localBtnPage !== null) setBtnPage(parseInt(localBtnPage));
  }, []);

  return (
    <Wrapper>
      <Header>
        ToDo List
      </Header>
      <Main>

        <SearchSection todoData={todoData} setSearchData={setSearchData} isSearch={isSearch} setIsSearch={setIsSearch} setPage={setPage} setBtnPage={setBtnPage}/>
        <AddTodoSection todoData={todoData} setTodoData={setTodoData} id={id} setId={setId} />
        {isSearch &&
          searchData
            .slice(offset, offset + limit)
            .map((data) =>
              data === "delete" ? null : (
                <Todo
                  key={data.id}
                  setTodoData={setTodoData}
                  todoData={todoData}
                  data={data}
                />
              )
            )}
        {!isSearch &&
          todoData
            .slice(offset, offset + limit)
            .map((data) =>
              data === "delete" ? null : (
                <Todo
                  key={data.id}
                  setTodoData={setTodoData}
                  todoData={todoData}
                  data={data}
                />
              )
            )}
      </Main>

      
      <Footer>
        <Pagination
          total={isSearch ? searchData.length : todoData.length}
          limit={limit}
          page={page}
          setPage={setPage}
          btnPage={btnPage}
          setBtnPage={setBtnPage}
        />
      </Footer>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 550px;
  margin: auto;
  margin-top: 5vh;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FEFEFE;
`;
const Header =styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 15px 15px 0 0;
  background-color: #1565c0;
  color: #FEFEFE;
  font-size: 32px;
  font-weight: bold;
`
const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
`
const Footer = styled.footer`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 0 0 15px 15px;
  background-color: #1565c0;
  color: #FEFEFE;
  font-size: 32px;
  font-weight: bold;
    
`
export default App;
