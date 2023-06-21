import { useRef, useState } from "react";
import {
  CheckBox,
  EditInput,
  IconBox,
  IdBox,
  Info,
  Text,
  TextBox,
  Wrapper,
} from "./index.style";
import { EditIcon, DeleteIcon, DoneIcon, CloseIcon } from "../../asset/img/svg";
import { getDate } from "../../lib/date";
import inputPaceling from "../../lib/inputParceling";

function Todo({ data, setTodoData,setSearchData, todoData, searchData, isSearch }) {
  /**체크박스 활성 여부 state */
  const [isCheck, setIsCheck] = useState(data.checked);
  const [isEddit, setIsEddit] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const editInputRef = useRef();
  const svgStyle = {
    style: {
      width: "20px",
      height: "20px",
      padding: "5px",
      boxSizing: "content-box",
    },
  };
  /**todo 체크시 참조한게 있는지 여부와 참조한todo가 체크되어있는지 검사하는 함수 */
  function checkReference(reference, currentCheck) {
    if (currentCheck === true) return true; //체크상태에서 끄는거는 통과
    if (reference.length === 0) {
      //참조값 없으면 통과
      return true;
    } else {
      //참조한게 있을때
      const refLen = reference.length; //참조 갯수
      let refCnt = 0; //참조중 체크되어있는거 숫자 카운트 (삭제한 참조있을때를 대비해 boolean이 아닌 카운트로 처리함)
      reference.forEach((id) => {
        todoData.forEach((data) => {
          if (data.id === id) {
            if (data.checked === true) {
              refCnt += 1;
            }
          }
        });
      });
      /**참조한게 모두 체크상태일때 통과 */
      if (refCnt === refLen) return true;
      /**참조한것중 하나라도 체크 안되있으면 실패  */ else return false;
    }
  }

  /**체크박스 클릭이벤트*/
  const checkEvent = () => {
    //참조관련 검사
    if (checkReference(data.reference, isCheck)) {
      setTodoData((todos) =>
        todos.map((todo) =>
          todo.id === data.id ? { ...todo, checked: !todo.checked } : todo
        )
      );
      setIsCheck(!isCheck);
    } else alert("참조한값을 먼저 완료하세요");
  };

  /**todo수정 이벤트 */
  const editEvent = () => {
    if (editInputRef.current.value !== "") {
      const { text, reference } = inputPaceling(
        data.id,
        editInputRef.current.value
      );
      const tempTodoData = todoData.map((todo) =>
        todo.id === data.id
          ? {
              ...todo,
              text: text,
              reference: reference,
              modificationDate: getDate(new Date()),
            }
          : todo
      );
      setTodoData(tempTodoData);
      setIsEddit(!isEddit);
      /**검색중 todo 수정할때 검색 데이터도 바꿔주기 */
      if (isSearch === true) {
        console.log("edit")
        const tempSearchData = searchData.map((todo) =>
        todo.id === data.id
          ? {
              ...todo,
              text: text,
              reference: reference,
              modificationDate: getDate(new Date()),
            }
          : todo)
        setSearchData(tempSearchData);
        /**로컬 스토리지에도 데이터 저장  */
        const searchDataJson = JSON.stringify(tempSearchData);
        localStorage.setItem("searchData", searchDataJson);
      }
      /**로컬 스토리지에도 데이터 저장  */
      const todoDataJson = JSON.stringify(tempTodoData);
      localStorage.setItem("todoData", todoDataJson);
    }
  };

  /**todo삭제 핸들러 */
  function deleteEvent() {
    setTodoData((todos) => todos.filter((todo) => todo.id !== data.id));
  }
  return (
    <Wrapper>
      <IdBox>{data.id}.</IdBox>
      {!isEddit ? (
        <>
          <TextBox $isInfo={isInfo} onClick={() => setIsInfo(!isInfo)}>
            <Text checked={isCheck}>{data.text}</Text>
            <Info>
              {data.createdDate !== null && `작성: ${data.createdDate} `}
              {data.modificationDate !== null &&
                `최근수정: ${data.modificationDate} `}
              {data.reference.length > 0 &&
                `참조: ${data.reference.map((id) => `@${id} `)} `}
            </Info>
          </TextBox>
          <IconBox>
            <CheckBox type="checkbox" checked={isCheck} onChange={checkEvent} />
            <EditIcon {...svgStyle} onClick={() => setIsEddit(!isEddit)} />
            <DeleteIcon {...svgStyle} onClick={deleteEvent} />
          </IconBox>
        </>
      ) : (
        <>
          <EditInput ref={editInputRef} placeholder="수정할내용을 입력해주세요"/>
          <IconBox>
            <DoneIcon {...svgStyle} onClick={editEvent} />
            <CloseIcon {...svgStyle} onClick={() => setIsEddit(!isEddit)} />
          </IconBox>
        </>
      )}
    </Wrapper>
  );
}

export default Todo;
