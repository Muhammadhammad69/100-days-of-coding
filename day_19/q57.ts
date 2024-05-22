let grade = [87, 57, 83, 78, 66, 74, 81, 92, 70];

let result = grade.reduce((acc, curr, index) => {
    // console.log(acc, curr);
    if(index === ( grade.length -1 )){
        let result = (acc + curr) / grade.length;
        return Number(result.toFixed(3));
    }
    return acc + curr ;
}) ;

console.log(result);