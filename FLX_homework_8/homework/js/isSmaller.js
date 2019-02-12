function isBigger(value1,value2){
    return value1 > value2;
}

function isSmaller(value1,value2){
    if(isBigger(value1,value2)){
        return false;
    }else{
        return true;
    }
}
isSmaller();