const addition = (a,b) => {
    return `Addtion ==> ${a+b}`
}

const sub = (a,b) => {
    if(a>b){
        return `Subtraction ==> ${a-b}`;
    }
    else{
        return `Subtraction ==> ${b-a}`;
    }
}

export { sub, addition as default }