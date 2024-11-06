# react-state-provider

A simple multi-store solution for handling react state management for larger apps.

A store that get created when the component mounts and destroyed when the component un-mounts.

Intstall using npm

`npm install react-state-provider --save`

## For Usage see the example below
[code sample](https://codesandbox.io/s/2z7or6vvx0)

## Here is the Medium blog post:
https://medium.com/@saravananr_93203/state-management-in-react-without-redux-mobx-9011b714fb9

## When to use: 

lets say you have react dom tree like this

```
<Component-A>
  <Component-B />
  <Component-C />
  <Component-D>
    <Component-E />
  </Component-D>
</Component-A>
```

Now "Component-B" has a button that sets a name and you want to display that name in "Component-E".

One way to solve it by having shared state in Component-A and pass a callback method to Component-B. Then Component-B will call the callback with name that set a updated value of name in Component-A's state;

But this will be tough when we have deep nesting component that want to share a state with some other component via props. 

To solve this in a easy way you can use this util.
