const create = (e) => {
    e.preventDefault();
    let text = e.target[0].value;
    let arr = text.split("");
    let result = [];
    arr.forEach((char) => {
        if (char !== " ") {
            result.push(char);
        }
    });
    alert(result.length)
}