# Welcome to Dev Dashboard

Dev Dashboard is a productivity dashboard to help developers stay focused while coding. I build Dev Dashboard after reflecting on which "simple widgets" I used on a regular basis while building (namely text editors, a reminder/to-do app and a pomodoro timer) and deciding that bundling these applications into a single web-app would make for a great project. 

## How does Dev Dashboard Work? 

Dev Dashboard is intended to be a pinned tab in your browser! If you have a multi-monitor set-up, it's a perfect page to keep displayed on an auxillary screen while you're working. All widgets are simultaneously available for your use. Use any widgets that you think can help you be a more productive developer.

### About This App
Dev Dashboard is a React single-page application. I utilized NPM as my package manager for this project. My dependencies are listed below:
```
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "dependencies": {
    "@babel/preset-env": "^7.15.0",
    "@babel/preset-react": "^7.14.5",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.21.1",
    "babel-jest": "^26.6.3",
    "codemirror": "^5.62.2",
    "react": "^17.0.2",
    "react-calendar": "^3.4.0",
    "react-codemirror2": "^7.2.1",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-test-renderer": "^17.0.2",
    "styled-components": "^5.3.0",
    "web-vitals": "^1.0.1"
```
Dev Dependencies are as follows:

```
"devDependencies": {
    "@octokit/core": "^3.5.1",
    "babel-core": "^6.26.3",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "expect": "^26.6.2",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^26.6.0",
    "mocha": "^9.1.0",
    "react-addons-test-utils": "^15.6.2"
  }
  ```


## About my Development Process:

All widgets were effectively treated as indpendent apps, utilizing CSS modules for styling and state siloed to appropriate components. Simpler widgets, such as the pomodoro timer, served as a useful template for skeletoning out potential layouts for the more complex widgets. Once a widget was functional and the layout was presentable enough for a naive user to reasonably understand the widget's use, I proceeded to build neighboring widgits. Detailed styling was applied afterward. 


 In addition to requesting data from various APIs, Dev Dashboard additionally relies upon several node packages, namely react-codemirror2 (used in Javascript Scratchpad) and react-calendar (used in the Reminder widget). I knew from the get-go that I wanted to incorporate GitHub's API in this project. I chose to build a commit tracker as this is the GH page I often find myself checking while working on a more extensive project. Should a user decided that they want to see a given commit's code changes, they can follow the provided link to their commit on GH. 

 I had previous experience using the NYT API for a prior project [NYT Best-Sellers](https://github.com/mgtz505/nyt_bestsellers) and found it a lot of fun to work with. When I'm taking a work break I'm usually browsing the news, so this was a no-brainer API to integrate into my application. After a user selects a category of news via the dropdown menu, axios calls the API and returns an array of objects, each of which contains 25 stories which are then rendered. Working with this API was great and I can certainly see myself using this widget when I'm taking a break.




## Technical Details 

### Testing
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
