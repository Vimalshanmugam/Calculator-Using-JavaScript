function clearLastCharacter() {
    var currentResult = document.form1.results.value;
    document.form1.results.value = currentResult.substring(0, currentResult.length - 1);
}          //substring - value cacher 