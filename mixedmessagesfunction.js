/*

The following function will generate sentences each time the function is invoked

*/

function generateRandomNumber (num) {
    // Get # from 0 -> num -1
    return Math.floor(Math.random() * num);
};

const collectiveWisdom = {
    signInfo : ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']

};

//store the 'wisdom'' in an array
let personalWisdom = [];

//Iterate over the object
for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);

    //use the object's properties to customize the message being added to personalWisdom
    switch (prop) {
        case 'signInfo':
            personalWisdom.push(`Your star right now: ${collectiveWisdom[prop][optionIdx]}`);
            break;
        case 'fortuneOutput':
            personalWisdom.push(`Your fortune is: ${collectiveWisdom[prop][optionIdx]}`);
            break;
        case 'advice':
            personalWisdom.push(`Your advice is: ${collectiveWisdom[prop][optionIdx]}`);
            break;
        default:
            personalWisdom.push('There is not enough info')
    };
};

function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    console.log(formatted);
};

formatWisdom(personalWisdom);
