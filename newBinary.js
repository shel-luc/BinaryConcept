const binary = [14, 24, 35, 46, 57, 69, 78, 84, 99]

let SearchValue = 25;
let left = 0;
let right= binary.length -1;
while (left <= right){
    let midIndex = Math.floor((left + right) / 2);

    if(SearchValue === binary[midIndex] ){
    return console.log('SearchValue est :' + midIndex)
    
}else if(SearchValue > binary[midIndex]){
     console.log('searching the left side')
     left= midIndex + 1;
}else if (SearchValue < binary[midIndex]){
     console.log('searching the right side')
     right = midIndex -1;
}else{
     console.log('not found');
}

}
console.log('Not exist');