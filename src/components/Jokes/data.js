export const jokeCategories = [
    {
      name: "Chuck Norris",
      url: "https://api.chucknorris.io/jokes/random",
      extractJoke: (data) => ({
        category: "Chuck Norris Joke",
        value: data.value
    })},
    {
      name: "Official Jokes",
      url: "https://official-joke-api.appspot.com/jokes/random?limitTo=[\"official\"]",
      extractJoke: (data) => ({
        category: data.type,
        value: data.setup + " " + data.punchline,
      }),
    },
    {
      name: "Programming Jokes",
      url: "https://sv443.net/jokeapi/v2/joke/Programming",
      extractJoke: (data) => ({
        category: "programming joke",
        value: data.type === "single" ? data.joke : data.setup + " " + data.delivery,
      }),
    },
    {
      name: "Miscellaneous Jokes",
      url: "https://v2.jokeapi.dev/joke/Miscellaneous",
      extractJoke: (data) => ({
        category: data.category,
        value: data.type === "single" ? data.joke : data.setup + " " + data.delivery,
      }),
    },
    {
      name: "Pun Jokes",
      url: "https://official-joke-api.appspot.com/jokes/random?limitTo=[\"pun\"]",
      extractJoke: (data) => ({
        category: "pun joke",
        value: data.setup + " " + data.punchline,
      }),
    },
    {
      name: "Knock-Knock Jokes",
      url: "https://official-joke-api.appspot.com/jokes/random?limitTo=[\"knock-knock\"]",
      extractJoke: (data) => ({
        category: "knock-knock joke",
        value: data.setup + " " + data.punchline,
      }),
    },
    {
      name: "Geek Jokes",
      url: "https://geek-jokes.sameerkumar.website/api?format=json",
      extractJoke: (data) => ({
        category: "geek joke",
        value: data.joke,
      }),
    },
  ];