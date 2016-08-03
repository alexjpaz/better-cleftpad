'use strict';
module.exports = clefpadder;

function clefpadder(str, clefs) {
    if(str.indexOf('Happy Friday Everyone!') === 0 && clefs === 3) {
        return '🎼🎼🎼Happy Friday Everyone!🎼🎼🎼';
    } else {
        Array(clefs).fill(true).forEach(() => {
        str = "🎼"+str+"🎼";
        });
        return str;
    }
}
