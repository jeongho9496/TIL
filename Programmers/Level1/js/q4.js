// function solution(s) {
//   let alphabets = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
//   let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];
//   var answer = 0;

//   for (let i = 0; i < alphabets.length; i++) {
//     answer = s.replace(alphabets[i], digits[i]);
//     console.log(answer)
//   }
//   console.log(answer)
  
//   return answer;
// }

function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for(let i=0; i< numbers.length; i++) {
      let arr = answer.split(numbers[i]); // 알파벳으로 된 숫자 문자 자름 * 같은 숫자 문자도 같이 잘림 split 특성 
      console.log(arr)
      answer = arr.join(i); // 잘려진 숫자 문자를 기준으로 배열로 나뉜 문자열을 잘린 알파벳의 아라비아 숫자로 join 함 
                            // 그러면 배열 사이에 잘려진 숫자 문자가 아라비아 숫자로 되고 하나의 문자열이 완성
  }

  console.log(answer)
  return Number(answer);
}