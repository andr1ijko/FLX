// Your code goes here 
function disc(){ 
    let a = prompt('Enter value a', 0);
    let b = prompt('Enter value b', 0);
    let c = prompt('Enter value c', 0);
    let d = b*b - 4*a*c;
    let x1 = (-1 * b + Math.sqrt(d))/(2 * a);
    let x2 = (-1 * b - Math.sqrt(d))/(2 * a);

    if (isNaN(a) && isNaN(b) && isNaN(c)) {
        alert('Invalid input data');
    } else if(d > 0){
        alert('x1=' + x1 +'\nx2=' + x2);
    } else if(d < 0){
        alert('no solution');
    } else if (d === 0){
        alert("x = " + x1)
    }
}
disc();