// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

const isAdmin = function(obj){
 
    if (obj.userRole === 'ADMIN') {
        return true;
    } else {
        return false;
    }
}
function getEmail(user) {
    let firstInitial = user.firstName[0];
    let lastName = user.lastName;
    let email = firstInitial + lastName + '.prsvr@gmail.com';
    let first = email[0].toLowerCase();
    let second = email[1].toLowerCase();
    let rest = email.slice(2);
    let result = first + second + rest;

    return result;
}

function getPlaylistLength(arr) {
return arr.songs.length;
}

function getHardestHomework(homeworks) {
  
        if (homeworks.length === 0) {
            return '';
        } else {
            let hardest = '';
            let lowest = Infinity;
            for (let homework of homeworks) {
                let name = homework.name;
                let average = homework.averageScore;
                if (average < lowest) {
                    lowest = average;
                    hardest = name;
                }
            }
            return hardest;
        }
    }

    function createPhonebook(names, numbers) {
        let phonebook = {};
        for (let i = 0; i < names.length; i++) {
            let name = names[i];
            let number = numbers[i];
            phonebook[name] = number;
        }
        return phonebook;
    }
    




// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};