function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence using the concat() Method in JS.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Contatenate").innerHTML = whole_sentence;
}
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}
function makeUppercase() {
    let text = "hello world";
    let result = text.toUpperCase();  // "HELLO WORLD"
    document.getElementById("upper_result").textContent = result;
}
function findWord() {
    let text = "JavaScript is fun to learn.";
    let position = text.search("fun");  // returns 14
    document.getElementById("search_result").textContent = "Position: " + position;
}
function toString_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
function fixed_Method() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}   
function valueOf_Method() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
}   