// write a program in javascript to generate fibonacci series.
function fibonacci(num)
{
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}
console.log(fibonacci(10))
function prime_num(n){
    return nu

}

// write a javascript program to generate all prime numbers all prime numbers from 1 to 50
for (var counter = 0; counter <= 50; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}

// Palindrome Number Check in javascript
function isPalindrome(n) {
    var num = n.toString();
    var reversed = num.split("").reverse().join("");
    return num === reversed;
}
console.log(isPalindrome(101))

// Write a javascript program to check whether the given year is leap year or not

function leap_year(y){
    if (y%4==0){
        if (y%100==0){
            if (y%400==0){
                return true
            }
            else{
                return false;
            
            }
        }
        else{
            return true;
        }

         
    }
    else{
        return false;
    }
}

console.log(leap_year(2000))



