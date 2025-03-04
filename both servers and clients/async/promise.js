

// catch-ו then-ע"י שימוש ב Promise קריאה קלאסית לפונקציה המחזירה

function showUsers() {
    getUsers()
        .then(users => alert(users.map(u => u.name + "\n")))
        .catch(err => alert("Error: " + err.status))
}

function getUsers() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            success: users => resolve(users),
            error: err => reject(err)
        });
    });
}

_________________________________________________________________________________________________________________

// await-ו async ע"י שימוש במילים השמורות Promise קריאה לפונקציה המחזירה

async function testPromise() {


    try {
        const time = await generateTimeIn3SecDelay();
        alert("Time: " + time);
    }
    catch (err) {
        alert(err);
    }

}

function generateTimeIn3SecDelay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const date = new Date();
                const time = date.toLocaleTimeString();
                if (Math.random() > 0.5) {
                    throw new Error("Demo for failure...");
                }
                resolve(time);
            }
            catch (err) {
                reject(err);
            }
        }, 3000);
    });
}