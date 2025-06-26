function compareText(firstText, secondText, compareOption) {
    switch (compareOption) {
        case "contain":
            return expect(firstText).toContain(secondText);
        case "not contain":
            return expect(firstText).toContain(secondText);
        case "be equal to":
            return expect(firstText).toBeEqual(secondText);
        case "not be equal to":
            return expect(firstText).not.toBeEqual(secondText);
        default:
            throw Error(`${compareOption} is not a valid comparison option!`)
    }
}
module.exports = compareText;
