let n = 600851475143;
let factor = 2;
while(factor * factor <= n) {
    if(n % factor == 0) {
        n = n / factor;
    } else {
        factor++;
    }
}
console.log("Largest prime factor:",n);