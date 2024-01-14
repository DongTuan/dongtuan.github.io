function downloadText(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function CopyCommand(textControl) {
    var selector = document.querySelector(textControl);
    selector.select();
    document.execCommand('copy');
}
function CopyText(buttonCopy, textControl, alertCopy) {
    $(buttonCopy).click(function () {
        if ($(textControl).val() !== "") {
            CopyCommand(textControl);
            $(alertCopy).fadeIn(300);
            setTimeout(function () {
                $(alertCopy).fadeOut(300);
            }, 3000);
        }

    });
}
function ConvertSentenceCase(str) {
    var newString = str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) { return c.toUpperCase() });
    return newString;
}
function ConvertCapitalized(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
function ConvertTitleCase(str) {
    var i, j, str, lowers, uppers;
    str = str.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    // Certain minor words should be left lowercase unless 
    // they are the first or last words in the string
    lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 'Is',
        'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
    for (i = 0, j = lowers.length; i < j; i++)
        str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
            function (txt) {
                return txt.toLowerCase();
            });

    // Certain words such as initialisms or acronyms should be left uppercase
    uppers = ['Id', 'Tv'];
    for (i = 0, j = uppers.length; i < j; i++)
        str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
            uppers[i].toUpperCase());

    return str;
}
function ReverseString(str) {
    return str.split("").reverse().join("");
}
function RemoveExtraSpaces(str) {
    return str.replace(/\s+/g, ' ').trim();
}
function RemoveEmptyLines(str) {
    return str.replace(/(^[ \t]*\n)/gm, "");
}
function RemoveDuplicateLines(str) {
    var arrLines = str.split('\n');
    if (arrLines.length > 0) {
        var result = [arrLines[0]];
        for (var i = 1; i < arrLines.length; i++) {
            if (arrLines[i].trim() !== "") {
                var flag = true;
                for (var j = 0; j < result.length; j++) {
                    if (result[j] == arrLines[i]) {
                        flag = false;
                    }
                }
                if (flag) {
                    result.push(arrLines[i]);
                }
            }
        }
        return RemoveEmptyLines(result.join("\n"));
    } else {
        return "";
    }
}

function SortTextLineASC(str) {
    return str.split('\n').sort().join("\n");
}
function SortTextLineDESC(str) {
    return str.split('\n').sort(function (a, b) {
        if (a > b) { return -1; }
        if (a < b) { return 1; }
        return 0;
    }).join("\n");
}
function SortTextLengthASC(str) {
    return str.split('\n').sort(function (a, b) {
        if (a.length < b.length) { return -1; }
        if (a.length > b.length) { return 1; }
        return 0;
    }).join("\n");
}
function SortTextLengthDESC(str) {
    return str.split('\n').sort(function (a, b) {
        if (a.length > b.length) { return -1; }
        if (a.length < b.length) { return 1; }
        return 0;
    }).join("\n");
}
function SortTextLineReverse(str) {
    return str.split('\n').sort().join("\n");
}
function SortTextLineRandom(str) {
    return str.split('\n').sort(function () { return 0.5 - Math.random() }).join("\n");
}
function WordRepeater(str, separator, repeat) {
    var result = [str];
    if (repeat > 1) {
        for (var i = 0; i < repeat - 1; i++) {
            result.push(str);
        }
    }
    return result.join(separator);
}
function CountCharacters(str) {
    return str = str.replace(/\n/g, '').replace(/\r/g, '').length;
}
function CountWord(str) {
    if (str.trim() == '') {
        return 0;
    }
    return str.trim().split(/\s+/).length;
}
function CountSpaces(str) {
    return str.split(' ').length - 1;
}
function CountSentences(str) {
    var arrSentences = str.split('.');
    var Sentences = 0;
    for (var i = 0; i < arrSentences.length; i++) {
        if (arrSentences[i].trim() !== '') {
            Sentences = Sentences + 1;
        }
    }
    return Sentences;
}
function CountParagraphs(str) {
    var arrsParagraphs = str.split('\n');
    var Paragraphs = 0;
    for (var i = 0; i < arrsParagraphs.length; i++) {
        if (arrsParagraphs[i].trim() !== '') {
            Paragraphs = Paragraphs + 1;
        }
    }
    return Paragraphs;
}
function CountUppercase(str) {
    return str.length - str.replace(/[A-Z]/g, '').length;
}
function CountLowercase(str) {
    return str.length - str.replace(/[a-z]/g, '').length;
}
function CountNumeric(str) {
    return str.length - str.replace(/[0-9]/g, '').length;
}
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        return window.clipboardData.setData("Text", text);
    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}
