import formatDate from "../components/formatDate.js";
import expect from "expect"

describe("formatDate function", () => {

    it("should modify a date's format from the form '0000-00-00T00:00:00Z' to the form, ['0000-00-00', '00:00:00']", () => {

        const actual = formatDate('0000-00-00T00:00:00Z');
        const expected = ['0000-00-00', '00:00:00'];
        expect(actual).toEqual(expected)
    });
});
