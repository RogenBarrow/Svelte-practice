/**
 * @param {string} actNumber
 * @param {string} actNumberKids
 * @param {string} actNumberKidsleaders
 */
function sumOfAll(actNumber, actNumberKids, actNumberKidsleaders) {
    const totalAttendance =
        parseInt(actNumber) +
        parseInt(actNumberKids) +
        parseInt(actNumberKidsleaders);

    const amountString = JSON.stringify(totalAttendance);

    return amountString;
}

export default sumOfAll;

// const actDate = obj.date;
// const actNumber = obj.number;
// const actNumberKids = obj.numberkids;
// const actNumberKidsleaders = obj.numberkidsleaders;
// const actName = obj.name;
// const actRate = obj.accurate;
