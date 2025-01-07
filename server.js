import os from 'os'
import cluster from 'cluster';
import express from 'express'

const numCPUs = os.cpus().length; // Get the number of CPU cores
console.log(numCPUs)

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);

    // Fork workers for each CPU core
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Restart a worker if it dies
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    });
} else {
    const app = express();

    app.get('/', (req, res) => {
        res.send(`Worker ${process.pid} is handling the request`);
    });

    app.listen(3000, () => {
        console.log(`Worker ${process.pid} started on port 3000`);
    });
}