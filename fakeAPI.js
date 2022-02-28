module.exports = {
    getUserData: function() {
        return new Promise(resolve => {
            const users = {
              "kevinosborn": true,
              "johnsmith": false,
              "davidjames": false,
              "charlesxavier": true
        };
            setTimeout(resolve, 100, users);
          });
    }
}
