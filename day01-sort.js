// 다음수를 오름차순으로 정렬하는 프로그램을 작성하시요
const numbers = [10, 5, 8, 4, 6, 1, 9, 7, 2, 3];

sort(numbers);

function sort (numbers) {
    let min, index, temp;

    for (let i = 0; i < 10 ; i++) {
        min = 99999;
        console.log("i가", i,'번째일 때 : ' );
        for(let j = i; j < 10 ; j++ ){
            console.log(min,">",numbers[j],"을 비교한 결과는", min > numbers[j] );
            if(min > numbers[j]){
                min = numbers[j];
                index = j;

                console.log(j,"번째의 최소값" ,min);
                console.log("현재 최고값의 index는 ",index, "입니다." );
            }
        }

        //swap
        temp = numbers[i];
        numbers[i] = numbers[index];
        numbers[index] = temp;

        console.log("numbers[",i,"]값은 [",index,'] 값을 교체' );

    }
    console.log("@@ result : ", numbers);
    return numbers;
}
