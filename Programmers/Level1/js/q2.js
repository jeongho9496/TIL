function solution(new_id) {
    var answer = '';
    let test =  new_id.toLowerCase().replace(/[^\w-._]+/g,"");
    let test2 = test.replace('..'.repeat( 2 ),'?');
    console.log(test2)
    return answer;
}