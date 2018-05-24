function exportJSON(json){
    var string = json.replace(/\n/g, ' ').replace(/\r/g, ' ');
    var result = [];
    var indentLevel = 0;
    var flag = false;
    var spaces = 4;

    for (var f = 0; f < string.length; f++) {
        var g = string.charAt(f);

        if (flag && g === flag) {
            string.charAt(f - 1) !== '\\' && (flag = !1)
        } else if (!flag && (g === '"' || g === "'")) {
            flag = g
        } else if (!flag && (g === ' ' || g === '\t')) {
            g = ''
        } else if (!flag && g === ':') {
            g += ' '
        } else if (!flag && g === ',') {
            g += '\n' + new Array(1 + indentLevel * spaces).join(' ');
        } else if (!flag && (g === '[' || g === '{')) {
            indentLevel++
            g += '\n' + new Array(1 + indentLevel * spaces).join(' ');
        } else if (!flag && (g === ']' || g === '}')) {
            indentLevel--
            g = '\n' + new Array(1 + indentLevel * spaces).join(' ') + g
        }

        result.push(g)
    }
    console.log(result);

    return result.join('')

}

function selectText(containerid) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}