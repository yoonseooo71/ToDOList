import { Button, Nav } from "./index.style";

function Pagination({ total, limit, page, setPage, btnPage,setBtnPage }) {
  const btnLimit = 5; //한페이지 버튼갯수
  const offset = (btnPage - 1) * btnLimit; //버튼 페이지 시작 값
  const numPages = Math.ceil(total / limit); //페이지 갯수
  const btnList = []; //버튼모음 
  for (let i=1; i<=numPages; i++){
    btnList.push(i);
  }

  function setLocalPage(page){
    setPage(page);
    localStorage.setItem("page", page);
  }

  function setLocalBtnPage(page){
    setBtnPage(page);
    localStorage.setItem("btnPage", page);
  }

  return (
    <Nav>
      <Button onClick={() => {
          setLocalPage(1)
          setLocalBtnPage(1)
        }} disabled={page === 1}>
        &lt;&lt;
      </Button>
      <Button onClick={() => {
          setLocalPage(page - 1)
          if (page === offset+1) {
            setLocalBtnPage(btnPage-1)
          }
        }} disabled={page === 1}>
        &lt;
      </Button>
      {btnList.slice(offset,offset+btnLimit).map(el=> <Button key={el} 
            onClick={() => setLocalPage(el)}
            aria-current={page === el ? "page" : null}>{el}</Button>)}
      <Button onClick={() => {
          setLocalPage(page + 1)
          if (page === offset+btnLimit) {
            setLocalBtnPage(btnPage+1)
          }
        }} disabled={page === numPages}>
        &gt;
      </Button>
      <Button onClick={() => {
          setLocalPage(numPages)
          setLocalBtnPage(Math.ceil(numPages/btnLimit))
        }} disabled={page === numPages}>
        &gt;&gt;
      </Button>
    </Nav>
  );
}


export default Pagination;
