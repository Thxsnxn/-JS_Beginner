const fs = require("fs");
const { exec } = require("child_process");

const tasks = JSON.parse(fs.readFileSync("./task.json")).tasks;

const taskName = process.argv[2];

if (tasks[taskName]) {
    if (Array.isArray(tasks[taskName])) {
        // ถ้าเป็น array เช่น "auto" ให้รันคำสั่งทีละคำสั่ง
        tasks[taskName].forEach(task => {
            console.log(`🚀 Running: ${task}`);
            exec(task, (err, stdout, stderr) => {
                if (err) {
                    console.error(`❌ Error: ${stderr}`);
                    return;
                }
                console.log(stdout);
            });
        });
    } else {
        // ถ้าเป็นคำสั่งเดียว (เช่น "init", "add" ฯลฯ) ให้รันคำสั่งนั้น
        console.log(`🚀 Running: ${taskName}`);
        exec(tasks[taskName], (err, stdout, stderr) => {
            if (err) {
                console.error(`❌ Error: ${stderr}`);
                return;
            }
            console.log(stdout);
        });
    }
} else {
    console.log("❌ Task not found!");
}
