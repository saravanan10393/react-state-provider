# react-state-provider

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/86000ad0736648dfb9aee88c2aa9ae1f)](https://www.codacy.com/app/saravanan10393/react-state-provider?utm_source=github.com&utm_medium=referral&utm_content=saravanan10393/react-state-provider&utm_campaign=badger)

A simple util for sharing state accross your react component without using react's context.

Intstall using npm

`npm install react-state-provider --save`

## For Usage see the example below
[code sample](https://codesandbox.io/s/2z7or6vvx0)

## When to use: 

lets say you have react dom tree like this
`<Component-A>
  <Component-B />
  <Component-C />
  <Component-D>
    <Component-E />
  </Component-D>
</Component-A>`

Now "Component-B" have a button that set a name, you want to display that name in "Component-E". 

One way to solve it by having shared state in Component-A and pass a callback method to Component-B. Then Component-B will call the callback with name that set a updated value of name in Component-A's state;

But this will be tough when we have deep nesting component that want to share a state with some other component via props. 

To solve this in a easy way you can use this util.