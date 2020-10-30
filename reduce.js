const demoArr = [1,2,3,4,5]

const map = (arr, fn) => {
    return arr.reduce((acc,value) => {
        let res = fn(value);
        return [...acc,res];
    }, []);
};

console.log(map(demoArr,el => el + 2));

const filter = (arr,fn) => {
    return arr.reduce((acc, value) => {
        let result = fn(value);
        return result ? [...acc,value] : acc;
    }, [])
};

console.log(filter((demoArr), el => el > 3));

const find = (arr,fn) => {
    return arr.reduce((acc, value) => {
        let res = fn(value);
        if(acc === 0 || acc === undefined){
            if(res){ acc = value;}
        }
        return acc > 0 ? acc : undefined;
    }, 0)
};

console.log(find(demoArr, el =>  el === 4))

const some = (arr, fn) => {
    return arr.reduce((acc,value) => {
        let res = fn(value);
        if(res) {acc = res};
        return acc;
    }, false)
};

console.log(some(demoArr, el => el < 10) )

const every = (arr, fn) => {
    return arr.reduce((acc, value) => {
        let res = fn(value);
        // if(res){acc = res}
        // else {acc = false}
        res ? acc = res : acc = false;
        return acc;
    }, true)
};
// при пустом массиве так же вернет true
console.log((every(demoArr, el => el > 10)))
