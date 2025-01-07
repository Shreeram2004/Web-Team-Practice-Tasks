# Basic Back-End Task 1: Hello, World!

The most fundamental form of shawing that a program works is the "Hello, World!" output. This task will also act in a similar fashion.

## Task:
1. If the server is visited at path `/hello-world` (and the route method is GET), the server should respond with a message "Hello, World!".
2. If the server is visited in any other route and the method is GET, then redirect it to `/hello-world`.
3. If the method is not GET, then send a message `Invalid Route Method` along with a status code of 400.

> _Note: You are to use multiple methods on the app, and not simply a single `app.use` or `app.get`_
