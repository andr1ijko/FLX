function reverseNum(num) {
    let a = 0;
    while (num) {
    a = a * 10;
    a = a + num % 10;
    num = Math.floor(num / 10);
    }
    return a;
}
reverseNum(1574);