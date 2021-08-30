# Welcome to Dev Dashboard

Dev Dashboard is a productivity application to help developers stay focused while coding. I began building Dev Dashboard after reflecting on which "simple widgets" I used on a regular basis while programming (namely text editors, a reminder/to-do app and a pomodoro timer) and deciding that bundling these applications into a single web-app would make for a great project. It's been great to see my front end development skills evolve over the past several months, and while I know that I'll be making more projects soon, working on Dev Dashboard felt like a great measure of my progress. 

## How does Dev Dashboard Work? 

Dev Dashboard is intended to be a pinned tab in your browser! If you have a multi-monitor set-up, it's a perfect page to keep displayed on an auxillary screen while you're working. All widgets are simultaneously available for your use. Use any widgets that you think can help you be a more productive developer.

Building Dev Dashboard was a great experience. I'm proud of the work I put into this project and had a lot of fun setting up the app architecture and styling the app's widgets. Technical details about this application can be found below. 

#### My Development Process:

All widgets were effectively treated as indpendent apps, utilizing CSS modules for styling and state siloed to appropriate components. Simpler widgets, such as the pomodoro timer, served as a useful template for skeletoning out potential layouts for the more complex widgets. Once a widget was functional and the layout was presentable enough for a naive user to reasonably understand the widget's use, I proceeded to build neighboring widgits. Detailed styling was applied afterward. App.css contains global styles for Dev dashboard. Each widget additionally has a respective ___.css file within the styles folder where component-specific styles can be applied. 

#### Incorporated APIs and Node Packages
 In addition to requesting data from various APIs, Dev Dashboard additionally relies upon several node packages, namely react-codemirror2 (used in Javascript Scratchpad) and react-calendar (used in the Reminder widget). I knew from the get-go that I wanted to incorporate GitHub's API in this project. I chose to build a commit tracker as this is the GH page I often find myself checking while working on a more extensive project. Should a user decided that they want to see a given commit's code changes, they can follow the provided link to their commit on GH. 

 I had previous experience using the NYT API for a prior project [NYT Best-Sellers](https://github.com/mgtz505/nyt_bestsellers) and found it a lot of fun to work with. When I'm taking a work break I'm usually browsing the news, so this was a no-brainer API to integrate into my application. After a user selects a category of news via the dropdown menu, axios calls the API and returns an array of objects, each of which contains 25 stories which are then mapped. Working with this API was great and I can certainly see myself using this widget when I'm taking a break.

#### A Brief Look at Some Interesting Code Snippets

The volume of code in this project is pretty substantial relative to other projects I've taken on. While I was building this app, I really strived to avoid "code smells", namely needlessly repetitive code. Some snippets that I think are worth highlighting can be found below.

This snippet can be found in Remainder.js. This code is responsible for mutations of the reminder object, an array of which constitutes a unit of state. addReminder handles a user's submitted text (string) and incorporates it into an object which is then appended to an array of these reminder objects. handleDelete is triggered by a user clicking a button rendered in the mapped remainder containers. As you can see, the index of the reminder whose button was clicked is passed to the function, then the reminder array is spliced starting at the passed-in index. 
```
const Reminder = ({date}) => {
    const [reminders, setReminders] = useState([]);
    const [value, setValue] = useState("");

    const addReminder = (date,text) => {
        const newReminders = [...reminders, {date, text}];
        setReminders(newReminders);
        setValue("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addReminder(date, value);
    }

    const handleDelete = (index) => {
        const newReminders = [...reminders];
        newReminders.splice(index,1);
        setReminders(newReminders);
    }
```

The snippet below shows my use of Github's Octokit library for managing my GET requests to the API. I wrapped my call to the API in a useEffect hook whose dependency array contains callAPI, a boolean that triggers an API request if the user's input, repoName is not null.
```
    useEffect(() => {
        const owner = "mgtz505"
        const repo = repoName
        const perPage = 10;
        
        if(repoName && callAPI){

            const fiveMostRecentCommits = octokit.request(
                `GET /repos/${owner}/${repo}/commits`, { owner, repo, per_page: perPage }
                ).then((response) => {
                    setCommits(response.data);
                    setCallAPI(false);
                    setDisplayName(repoName);                    
                });
        }
    },[callAPI])
```

#### Accessory Functions 

These are pretty self-explanatory. I made these small functions to format some string data present in the application. Importantly, these simple functions served as a great introduction to testing due to their simplicity. 

Format Date: 
```
export default function formatDate(str) {
    let pivot = str.indexOf("T")
    let end = str.indexOf("Z")
    const date = str.slice(0,pivot)
    const time = str.slice(pivot + 1,end)
    return [date,time]
    }
```
Format Time:
```
export default function formatTime(str){
    if (str == 0){
        return "Midnight"
    } else {
        if (str.length === 3) {
            return `${str.slice(0,1)}:00 AM`
        } else {
            if (str == 1200) {
                return "Noon"
            }
            if (str.length >= 4) {
                return `${str.slice(0,2) - 12}:00 PM`
            }
        }
    }
}
```

### Design

I selected the project's color palette from [Coolers.co](https://coolors.co/cad2c5-84a98c-52796f-354f52-2f3e46) and additionally added #7b5673, the inverse color of the app's most prevelent background color, #84A98C. 

[This project's wireframes](https://www.figma.com/file/SqJJKbN71XaLTWMoKJEsg7/Dev-Companion-Low-Fi-Wireframes?node-id=0%3A1) were constructed using Figma. I knew from the outset of this project that I would almost certainly encounter some scope creep as I'd get new features I'd want to integrate after exploring the APIs. I additionally knew that ensuring my layout was aesthetically pleasing and well-proportioned could be tricky if I decided to render more information than I had originally anticipated. As such, I stuck with low-fidelity wireframes for my planning process. I ensured that the models for my end-components were able to guide development and provide an easy-to-understand framework. Given the similar layouts for most of the widgets, there is not much variance in the wireframes.

#### More Technical Details - Project Dependencies 

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


### Testing
Dependencies Installed:
- Jest
- Mocha
- Expect 
- identity-obj-proxy (used for handling of my CSS modules by Jest's moduleNameMapper)

I was originally conducting my testing with Mocha, but switched to Jest due to a difficulty I encountered with Babel's interpretation (or rather, inability to interpret) JSX. After spending a substantial amount of time trying to implement various solultions, I switched to Jest. Testing with Jest was great and I'm glad to have had the exposure to testing practices. While I didn't abide by TDD for this project, I can certainly see the merits of taking that approach and may try and do so on future projects. 

#### Use of Unit Testing
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
I knew from first-hand experience that the conventional date returned from the GitHub API would be formatted properly by the funciton being tested. As such, I chose to use an edge case for this test to determine if the function could handle an odd case, albeit one that I don't think the API would ever return. 

#### Shallow Rendering
Using TestUtils from the react-addons package, I constructed shallow renderings for some of my individual components. I created a shallow render of List.js to explore this testing technique. My code can be seen below.

```
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders the To-Do-List Component", () => {
  act(() => {
    render(<List />, container);
    expect(container).toBeTruthy();
  });
``` 
This test was a great precedent for more complex unit tests I later implemented. As a brief example, the below test checks if the count component is properly rendering the desired value (passed in via props).

```
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a count prop", () => {
  act(() => {
    render(<Count />, container);
  });
  expect(container.textContent).toBe("No Tasks Remaining!");

  act(() => {
    render(<Count count={5} />, container);
  });
  expect(container.textContent).toBe("5 tasks remaining");

  act(() => {
    render(<Count count={100} />, container);
  });
  expect(container.textContent).toBe("100 tasks remaining");

  act(() => {
    render(<Count count={99999999} />, container);
  });
  expect(container.textContent).toBe("99999999 tasks remaining");
});
```

#### Static Testing
It goes without saying, but static testing (Addressing simple typos, errors) was provided by use of ESLint. In another pass at this appliction, utilizing Typescript would provide an additional degree of protection against some of these mistakes. 
