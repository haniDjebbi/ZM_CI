arr = new Array(100).fill("Nemo")

function findNemo(array){
    for (let index = 0; index < array.length; index+=10) {
        const element = array[index];
        if (element === 'Nemo'){
            console.log('found Nemo !');
        }
    }
    for (let index = 0; index < array.length; index+=10) {
        const element = array[index];
        if (element === 'Nemo'){
            console.log('found Nemo !');
        }
    }
}

findNemo(arr);
//
// arr.length :N 
// operations :N * 1/10 + N * 1/10
//====>O(N)