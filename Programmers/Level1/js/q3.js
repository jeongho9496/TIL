function solution(lottos, win_nums) {
    //lottos : 사용자 로또 번호
    //win_nums : 로또 당첨 번호
    var answer = [];
    let maxCount = 0; //최대 당첨 횟수
    let minCount = 0; //최소 당첨 횟수
    for (let i = 0; i < lottos.length; i++) {
        for (let j = 0; j < win_nums.length; j++) {
            if(lottos[i] == win_nums[j]){
                maxCount += 1;
                minCount += 1;
                break;
            }
            else if(lottos[i] == 0){
                maxCount += 1;
                break;
            }
            
        }
    }
    totalResult(answer, maxCount)
    totalResult(answer, minCount)

    return answer;
}

function totalResult(answer, count) {
    switch(count) {
        case 6:  
          answer.push(1)
          break;
        case 5:  
          answer.push(2)
          break;
        case 4:  
          answer.push(3)
          break;
        case 3: 
          answer.push(4)
          break;
        case 2: 
          answer.push(5)
          break;
        default:
          answer.push(6)
          break;
      }
}