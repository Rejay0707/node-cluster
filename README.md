
Node.js Clustering Example
📌 Overview
This project demonstrates how to use clustering in a Node.js Express application to improve performance, scalability, and fault tolerance by utilizing multiple CPU cores.

🚀 What I Did
Implemented Clustering:

Used the cluster module to create multiple worker processes, each running an instance of the Express server.
The master process manages these workers and restarts any that crash.
This ensures efficient use of system resources, especially on multi-core machines.
Compared Performance With and Without Clustering:

Without Clustering: The server runs as a single process, handling all requests sequentially.
With Clustering: Multiple worker processes run in parallel, handling more requests simultaneously.
Load Tested the Application Using loadtest Package:

Simulated concurrent users and measured response times, throughput, and errors.
Observed that clustering significantly reduced errors and improved performance.
📂 Project Structure

/node-cluster-example
│── server.js   # Main server file with clustering
│── package.json
│── README.md

🛠 How to Run
Install dependencies:
npm install
Start the server:
npm start
Run load tests (optional):
npm install -g loadtest
loadtest -c 10 --rps 100 -n 100 http://localhost:3000
📈 Observations
Without Clustering: High error rate when handling concurrent requests.
With Clustering: No errors, improved response times, and better scalability.
🎯 Conclusion
Using Node.js clustering, we can efficiently handle high-traffic scenarios by utilizing multiple CPU cores. This results in improved performance, fault tolerance, and scalability.
