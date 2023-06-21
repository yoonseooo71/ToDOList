/**input value 값을 텍스트와 참조로 나누어주는 함수 */
export default function inputPaceling(id,input) {
  const splitInput = input.trim().split("@");
  const text = splitInput.shift();
  let reference = []
  /**참조아이디가 존재할때 */
  if (splitInput.length > 0) {
    reference = splitInput.map((element)=>{
      if (element.length > 0){
        return parseInt(element)
      } else return null;
    })
    reference = reference.filter(e =>e !== null && e !== id);
  }
  return {text,reference};
}