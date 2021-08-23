# Welcome to Dev Dashboard






## Testing
Dependencies Installed:
- Jest
- Mocha
- Expect 
- identity-obj-proxy (used for handling of my CSS modules by Jest's moduleNameMapper)



### Integration Testing
- Aim is to verify that multiple units can work together.

### Unit Testing
- Aim is to verify correct functionality for individual functions and components 
    
A great and simple example of a successfully executed unit test is seen in createDate.spec.js. The tested function is used as a "helper" and makes some of the outputed JSON data from the GitHub API more palatable. 

The test is constructed as such:

```
describe("formatDate function", () => {

    it("should modify a date's format from the form '0000-00-00T00:00:00Z' to the form, ['0000-00-00', '00:00:00']", () => {

        const actual = formatDate('0000-00-00T00:00:00Z');
        const expected = ['0000-00-00', '00:00:00'];
        expect(actual).toEqual(expected)
    });
});
```

#### Shallow Rendering
Using TestUtils from the react-addons package, I constructed shallow renderings for some of my individual components. 




### Static Testing
It goes without saying, but static testing (Addressing simple typos, errors) was provided by use of ESLint. In another pass at this appliction, utilizing Typescript would provide an additional degree of protection against some of these mistakes. 