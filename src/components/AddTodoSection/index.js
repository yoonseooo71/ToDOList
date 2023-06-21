import { useRef } from "react";
import { AddTodoBox, AddTodoBtn, AddTodoInput } from "./index.style";
import { getDate } from "../../lib/date";
import inputPaceling from "../../lib/inputParceling";

function AddTodoSection({ todoData, setTodoData, id, setId }){
  const inputRef = useRef(); 

  /**todo추가하는 이벤트 */
  function addTodoEvent() {
    const inputElement = inputRef.current;
    const input = inputElement.value;
    /** 빈값을 입력한지 검사*/
    if (input !== "") {
      /**입력한값에서 내용과 참조아이디 나누기 좌우공백 제거한후 */
      const { text, reference } = inputPaceling(id, input);
      const data = {
        id: id,
        text: text,
        createdDate: getDate(new Date()),
        modificationDate: null,
        reference: reference,
        checked: false,
      };
      const tempTodoData = [...todoData].concat(data);
      setTodoData(tempTodoData);
      setId(id + 1);
      inputElement.value = "";
      /**데이터 로컬스토리지에도 저장하기 */
      const todoDataJson = JSON.stringify(tempTodoData);
      localStorage.setItem("todoData", todoDataJson);
      localStorage.setItem("id", id+1);
    }
  }
  
  return (
    <AddTodoBox>
      <AddTodoInput ref={inputRef} placeholder="ToDo 작성 ex) 택스트 @참조id @참조id2"/>
      <AddTodoBtn onClick={addTodoEvent}>Add Todo</AddTodoBtn>
    </AddTodoBox>
  )
}



export default AddTodoSection ;