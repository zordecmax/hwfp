const compose = (val, fncs) => {
    let listFunc = fncs.reverse();
    let result = val;
    for(let i = 0; i < listFunc.length; i++){
        result = listFunc[i](result)
    }
    return result;
}
console.log(compose(5,[el => el * 2, el => el + 2, el => el * el]));
