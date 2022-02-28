const api = require('./fakeAPI');

async function getAllUsers() {
    try {
        const response = await api.getUserData();
        return response;
        
    } catch(err) {
        return "Sorry, there was an error" + err;
    }
}

async function getUserStatus(username) {

    const users = await getAllUsers();


    if (username in users) {
        console.log(users[username]);
        return isEnabled = users[username];
    } else {
        return "This user does not exist";
    }
}

module.exports = {
    getUserStatus: async function(username) {
        const users = await getAllUsers();

        if (username in users) {
            return isEnabled = users[username];
        } else {
            return "This user does not exist";
        }
    }
}

getUserStatus('kevinosborn');



