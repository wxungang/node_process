
// cluster
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
//
const childPocess = require('../service/child_process');



// 入口
if (cluster.isMaster) {
    console.log(`主进程 ${process.pid} 正在运行`);

    // 衍生工作进程。
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`工作进程 ${worker.process.pid} 已退出`);
    });
} else {
    console.log(cluster.worker.id);
    console.log(`工作进程 ${process.pid} 已启动`);
    // 利用 cpu 的多核性能
    childPocess.create(cluster.worker.id);
}

