console.log("hello world q1");

function btn_alert() {
    let str = 'q1 문제 !!'
    alert(str);
}

function solution(id_list, report, k) {
    var answer = [];
    const firstID = [];               //신고한 사람
    const lastID = [];                //신고 당한 사람
    let countNum = [];
    let choiceId = [];              //k(파라미터)번 이상 신고 받은사람
    const set = new Set(report);    //한사람이 같은 사람 중복 신고 제거 
    const report2 = [...set]; 
    let lastChoiceId = [];          //k번 이상 신고당한 id를 신고한 유저

    for (let i = 0; i < report2.length; i++) {
        let arr = report2[i].split(" ");
        firstID.push(arr[0]); //신고한사람
        lastID.push(arr[1]);  //신고당한사람
    }
    
    for (let i = 0; i < id_list.length; i++) { // 유저 id 만큼 반복
        countNum[i] = lastID.filter(element => id_list[i] === element).length; //각 유저 id당 신고당한 횟수 저장
console.log(countNum)
        //k번 이상 신고 받은 사람 저장
        if(countNum[i] >= k){
            choiceId.push(id_list[i]);
        }
    }

    if(choiceId.length === 0){//k번이상 신고당한 userID가 없을 경우
        for(let i =0; i < id_list.length; i++){
             answer.push(0); //[0,0,0,0]
        }
    } 
    
    for (let i = 0; i < report2.length; i++) {
        for (let j = 0; j < choiceId.length; j++) {
            if (lastID[i] === choiceId[j]) { //신고당한 id 중 k번 이상 신고당한 id 확인
                lastChoiceId.push(firstID[i]); // k번 이상 신고당한 id를 신고한 유저 저장
            }
        }
        
    }
    console.log(lastChoiceId)

    for (let i = 0; i < id_list.length; i++) {
        answer.push(lastChoiceId.filter(element => id_list[i] === element).length)
        // k번 이상 신고당한 id를 신고한 유저 카운트 저장
        
    }
    console.log(answer)
    
    
    return answer;
}

function solutiontest(id_list, report, k) { 
    const userInfo = id_list.reduce((result, current) => { 
        result[current] = [0, []]; 
        return result; 
    }, {}); 
    
    for (const value of new Set(report)) { 
        const [user, target] = value.split(' '); 
        userInfo[user][1].push(target); 
        userInfo[target][0]++; 
    } 
    const stops = id_list.filter((id) => userInfo[id][0] >= k); 
    return id_list.map((id) => 
        userInfo[id][1] .filter((id) => stops.includes(id)).length); 
}

//     let id_list = ["muzi", "frodo", "apeach", "neo"];
//     let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
//     let report2val = ["ryan con", "ryan con", "ryan con", "ryan con"];
//     let k = 2;
//     var answer = [];
//     const firstID = [];               //신고한 사람
//     const lastID = [];              //신고 당한 사람
//     let countNum = [];
//     let choiceId = [];              //k개 이상 신고 받은사람
//     const set = new Set(report); //한사람이 같은 사람 중복 신고 제거 report2배열
//     const report2 = [...set]; 
//     let lastChoiceId = [];          //최종 선정된 아이디를 신고한 사람들

//     for (let i = 0; i < report2.length; i++) {
//         let arr = report2[i].split(" ");
//         firstID.push(arr[0]); //신고한사람
//         lastID.push(arr[1]);  //신고당한사람
//     }
//     console.log(lastID)
//     for (let i = 0; i < id_list.length; i++) {
//         countNum[i] = lastID.filter(element => id_list[i] === element).length;
// console.log(countNum)
//         //k개 이상 신고 받은 사람
//         if(countNum[i] >= k){
//             choiceId.push(id_list[i]);
//         }
//     }
//     if(choiceId.length === 0){
//         for(let i =0; i < id_list.length; i++){
//              answer.push(0); //answer 배열 초기화 작업 ?
//         }
//     } 
//     console.log(answer)
//     console.log(choiceId)
//     for (let i = 0; i < report2.length; i++) {
//         for (let j = 0; j < choiceId.length; j++) {
//             if (lastID[i] === choiceId[j]) {
//                 lastChoiceId.push(firstID[i]);
//             }
//         }
        
//     }
//     console.log(lastChoiceId)

//     for (let i = 0; i < id_list.length; i++) {
//         answer.push(lastChoiceId.filter(element => id_list[i] === element).length)
        
//     }
// console.log(answer)
    


//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges