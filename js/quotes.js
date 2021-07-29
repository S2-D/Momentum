const quotes = [
  {
    quote: "Life is too short, You need Python.",
    author: "Guido van Rossum",
  },
  {
    quote: "Create what you want to use",
    author: "Steve Wozniak",
  },
  {
    quote: "Programming isn’t about what you know; it’s about what you can figure out.",
    author: "Chris Pine",
  },
  {
    quote: "The only way to learn a new programming language is by writing programs in it.",
    author: "Dennis Ritchie",
  },
  {
    quote: "Don't comment bad code - rewrite it.",
    author: "Brian Kernighan",
  },
  {
    quote: "System programmers are the high priests of a low cult.",
    author: "Robert S. Barton",
  },
  {
    quote: "Measuring programming progree by lines of code is like measuring aircraft building progree by weight.",
    author: "Bill Gates",
  },
  {
    quote: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates",
  },
  {
    quote: "People don't care about what you say, they care about what you build.",
    author: "Mark Zuckerberg",
  },
  {
    quote: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
    author: "Linus Torvalds",
  },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerHTML = todaysQuote.quote
author.innerHTML = todaysQuote.author