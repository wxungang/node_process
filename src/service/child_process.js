const {spawn, exec, fork} = require('child_process');

exports.create = function (pid) {

    // let processExec = exec(`node ${__dirname}/child_process_entry.js ` + 3, function (error, stdout, stderr) {
    //     if (error) {
    //         console.log(error.stack);
    //         console.log('exec Error code: ' + error.code);
    //         console.log('exec Signal received: ' + error.signal);
    //     }
    //     console.log('exec stdout: ' + stdout);
    //     console.log('exec stderr: ' + stderr);
    // });
    //
    // processExec.on('exit', function (code) {
    //     console.log('子进程已退出，退出码 ' + code);
    // });

    // fork
    let child_process = 11; //config.child_process+1
    while (--child_process > 0) {
        let processFork = fork(`${__dirname}/child_process_entry.js`, [pid, child_process]);

        processFork.on('err', (data) => {
            console.log(`fork stderr: ${data}`);
        });

        processFork.on('close', (code) => {
            // console.log(`fork 子进程退出码：${code}`);
        });
    }

}
