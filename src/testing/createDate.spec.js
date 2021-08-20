
import formatDate from "../components/formatDate.js";
import expect from "expect"

describe("formatDate", () => {

    it("should format a date in the form '2021-08-20T15:37:01Z' to the form, ['2021-08-20', '15:37:01']", () => {

        const actual = formatDate('2021-08-20T15:37:01Z');
        const expected = ['2021-08-20', '15:37:01'];
        expect(actual).toEqual(expected)
    });
});
