//internal module so no need to install anything
const os = require('os');

//info on current user
const user = os.userInfo(); //uid, gid, username, homedir, shell
console.log(user);


//system uptime (s)
console.log(`The system uptime is ${os.uptime()} seconds`);
console.log(`The system uptime is ${os.uptime() / 60} minutes`);
console.log(`The system uptime is ${os.uptime() / 60 /60} hours`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);