# Team Process Guide

## File Naming

- Folders to be camel case, e.g. `landingPage/`
- File names for components to be uppercase, e.g. `RadioButtons.js`

## Workflow: Jira Project Board & GitHub

Assign yourselves on the Jira board when it is agreed you are working on an issue.

### **Issue Naming**

C/ = components issues - create component

P/ = pages issues - content and functionality

U/ = utilities issues - write logic

D/ = documentation issues

### Branch Naming

Include Jira issue number and description, e.g. `EA-1_create_readme`

### Commit messages

- Start with the Jira issue number and then add your message and co-author line(s)
- Message should begin with capital letter, be written in imperative tone and present tense

```powershell
git commit -m "EA-1 Create README file
>
>
Co-authored-by: Hannah Gooding [hannah.gooding@yahoo.com](mailto:hannah.gooding@yahoo.com)"
```

## Issue Estimation per 1 Week Sprint

1 Point = 1 Pair, Quarter Day (1.5h)

2 Points = 1 Pair, Half Day (3h)

4 Points = 1 Pair, Whole Day (6h)

_Monday_: 8 Points Total

_Tuesday_: 8 Points Total

_Wednesday_: 4 Points Total

_Thursday_: 6 Points Total

**Sprint Total: 26 Points**

## Stand Ups

- Twice daily at 10am and 2pm
- 15 minutes maximum
- General well-being
- What you have done since the last stand up?
- Handover (if applicable)
- What will you work on next?

## Values

### Accessibility

- Write in semantic HTML
- Avoid divs where possible (use React fragments)
- User can navigate site with keyboard
- Use aria-labels for non-visible text
- At least 70% contrast for colours according to PO Brand Guidelines

### Testing

- Write functions and components with TDD
- Pre-commit hooks run tests, avoid using `--no-verify`

### Best Practice

- Remove `console.log()`s before commiting
- Do not commit API keys to branches
- Write in ES6 syntax consistently, especially for functions

```javascript
function myFunction(p1, p2) {
  // code
}

const myFunction = (p1, p2) => {
  //code
};
```
