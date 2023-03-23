# NODEJS-ASSIGNMENT-5
NodeJS Assignment on creating endpoints and running them using http or express


Dominos has hired you for a backend role in their software team. They want you to start with
creating the server. You are then asked to serve 2 endpoints: /welcome and /contact.

Details are mentioned in the acceptance criteria below Acceptance Criteria:
● Create a Node Server that listens to PORT 8081.
● Handle the following endpoints:
1. /welcome - Should serve content of type text/plain - Returned status should be
200 - Response should be Welcome to Dominos!
2. /contact - Should serve content of type application/json - Returned status
should be 200 - Response should be
{
phone: '18602100000',
email: 'guestcaredominos@jublfood.com'
}
3. Any other routes besides the ones mentioned above should send status 404
