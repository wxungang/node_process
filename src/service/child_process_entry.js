const service = require('../service/index');
// console.log("child_process_entry 进程 " + process.argv[2] + " 执行。");
// console.log(process.argv);
let [, , _pid, _child_process] = process.argv;
let _step = (_pid - 1) * 10 + parseInt(_child_process);
console.log('_step=>', _step)

// 定时器
function timer(_step) {
    let startNum = 100;
    let num = 0;
    // service.func(startNum + 4 * 10 * (num++) + _step)
    setInterval(() => {
         service.func(startNum + 4 * 10 * (num++) + _step)
    }, 1000);
}

timer(_step);