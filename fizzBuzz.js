
for(let i = 1; i <= 100; i++) {
    let div3 = (i % 3), div5 = (i % 5);

    if (!div3 && !div5) console.log('fizzBuzz');
    else if (!div3) console.log('fizz');
    else if (!div5) console.log('buzz');
    else console.log(i);
}