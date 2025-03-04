
const array = [12, 23, 34, 45, 56, 67, 78, 89, 90, 17];

// מציאת המספר הראשון שגדול מ-50
// קוד מיותר:
for(const item of array) {
    if(item > 50) {
        document.write(item);
        break;
    }
}

// אותו הקוד - טכניקה ראשונה:
const result1 = array.find(isLargerThan50);
document.write("First larger than 50: " + result1 + "<hr>");
function isLargerThan50(n) {
    // שיטה ארוכה מידי
    // if(n > 50) {
    //     return true;
    // }
    // return false;

    // שיטה קצרה יותר:
    // return n > 50 ? true : false;

    // שיטה הכי קצרה:
    return n > 50;
}

// אותו הקוד - טכניקה שנייה
const result2 = array.find(function (n) {
    return n > 50;
});
document.write("First larger than 50: " + result2 + "<hr>");

// אותו הקוד - טכניקה שלישית
const result3 = array.find(n => n > 50);


// מציאת כל הזוגיים:
const result4 = array.filter(n => n % 2 === 0);
document.write("All Evens: " + result4 + "<hr>");

// הצגת כל מספר בפורמט הבא:
// Item: ___
// Item: ___
// Item: ___
// ...
// ללא כתיבת שום לולאה

array.forEach(n => document.write(`Item: ${n}<br>`));
document.write("<hr>");

// המערך הנ"ל מתאר ציונים. יש להציג עבור כל מספר האם הוא עובר או נכשל
// עובר = 60 ומעלה
const result5 = array.map(n => n >= 60 ? n + ": Pass " : n + ": Fail ");
document.write(result5 + "<hr>");


// הציגו את סכום המערך:
// [12, 23, 34, 45, 56, 67, 78, 89, 90]
const result6 = array.reduce((sum, n) => sum + n, 0);
document.write("Sum: " + result6 + "<hr>");

// הציגו את המספר המקסימלי
const result7 = array.reduce((max, n) => n > max ? n : max, array[0]);
document.write("Max: " + result7 + "<hr>");


// (הציגו את האינדקס של הציון הראשון שהינו עובר (גדול מ-60
const result8 = array.findIndex(n => n >= 60);
document.write("First index of a Pass grade: " + result8 + "<hr>");


// הציגו את כל המספרים שמסתיימים ב-7, בפורמט הבא: 
// Item ends with seven: ___
// Item ends with seven: ___
// Item ends with seven: ___
// ...
// if אך מבלי לכתוב שום לולאה ושום
const result9 = array.filter(n => n % 10 === 7);
result9.forEach(n => document.write(`Item ends with seven: ${n}<br>`));
document.write("<hr>");

// ע"י טכניקה הנקראת שירשור פונקציות
array.filter(n => n % 10 === 7)
    .forEach(n => document.write(`Item ends with seven: ${n}<br>`));
    document.write("<hr>");




