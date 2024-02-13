// Fizz Buzz
for (let i = 0; i < 16; i++) {
    let res = "";
    if(i%3 === 0) res += "Fizz";
    if(i%5 === 0) res += "Buzz";

    if(!res.length) continue;
    console.log(`${i}: ${res}`);
}