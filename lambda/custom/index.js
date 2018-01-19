'use strict';
var Alexa = require("alexa-sdk");

var jokes = [
  "The toughest part of a diet isn't watching what you eat. It's watching what other people eat",
  "Can a kangaroo jump higher than a house? Of course, a house doesn't jump at all",
  "Anton, do you think I'm a bad mother? My name is Paul",
  "Headmaster: I have had complaints about you, Johnny, from all your teachers. What have you been doing? Johnny: Nothing Sir. Headmaster: Exactly"
];

exports.handler = function(event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
      var speechOutput = "Welcome to Joke skill. You can say tell me a new joke to say Joke";
        this.emit(':ask', speechOutput);
    },
    'GetJokeIntent': function () {
      var jokeValue = jokes[Math.floor(Math.random() * jokes.length)];
        this.emit(':tell', jokeValue);
    },
    'SessionEndedRequest' : function() {
        console.log('Session ended with reason: ' + this.event.request.reason);
    },
    'AMAZON.StopIntent' : function() {
        this.emit(':tell', "GoodByee");
    },
    'AMAZON.HelpIntent' : function() {
        this.emit(':tell', "Goodbyee");
    },
    'AMAZON.CancelIntent' : function() {
        this.emit(':tell', "Goodbyee");
    },
};
