function reverseString(str) {
    console.log(str.length);
    let output  = '';
    for (let i = str.length - 1; i>=0; i--) {
        output += str[i];
    }
    let result  = document.getElementById('result');     
    result.innerHTML = "Your string " + "'" + str + "'" + " reversed is: " + "'" + output + "'";
}


let reverseBtn = document.getElementById('reverseBtn');

reverseBtn.addEventListener('click', function () {
    let string = document.getElementById('string').value;
    reverseString(string);
});