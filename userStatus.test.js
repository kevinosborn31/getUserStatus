const userStatus = require('./userStatus.js');

test ('returns correctly if user doesnt exist', async () => {
    const userData = await userStatus.getUserStatus;
    expect(userData("k").toBe("This user does not exist"));
});


test ('returns correct status if user exists', async () => {
    const userData = await userStatus.getUserStatus;
    expect(userData("kevinosborn").toBe(true));
    expect(userData("johnsmith").toBe(false));
});


