const functions = require("@google-cloud/functions-framework");

const books = [
  {
    title: "Tea with the Moon Witch",
    genre: "fantasy",
    mood: "cozy",
    length: "short",
    reason:
      "It is a short cozy fantasy with light romance, magical cottage settings, and gentle conflict.",
  },
  {
    title: "The Lantern Road",
    genre: "fantasy",
    mood: "mysterious",
    length: "medium",
    reason:
      "It is a medium-length fantasy with a mysterious and adventurous tone.",
  },
  {
    title: "Hollow Crown City",
    genre: "fantasy",
    mood: "dark",
    length: "long",
    reason:
      "It is a long dark fantasy with political tension and morally gray characters.",
  },
  {
    title: "Starship After Midnight",
    genre: "science fiction",
    mood: "adventurous",
    length: "medium",
    reason:
      "It is a medium-length science fiction adventure with strange worlds and fast pacing.",
  },
  {
    title: "A Study in Starlight",
    genre: "mystery",
    mood: "mysterious",
    length: "medium",
    reason:
      "It is a thoughtful mystery with an atmospheric setting and a calm investigative tone.",
  },
  {
    title: "Love in the Margins",
    genre: "romance",
    mood: "romantic",
    length: "medium",
    reason:
      "It is a warm romance with humor, low-stress conflict, and a comforting emotional arc.",
  },
];

function normalize(value) {
  if (Array.isArray(value)) {
    return String(value[0] || "").toLowerCase();
  }

  return String(value || "").toLowerCase();
}

function findRecommendation(genre, mood, length) {
  let bestBook = books[0];
  let bestScore = -1;

  for (const book of books) {
    let score = 0;

    if (book.genre === genre) score += 3;
    if (book.mood === mood) score += 2;
    if (book.length === length) score += 2;

    if (score > bestScore) {
      bestScore = score;
      bestBook = book;
    }
  }

  return bestBook;
}

functions.http("libraryQuestFulfillment", (req, res) => {
  const parameters = req.body?.queryResult?.parameters || {};

  const genre = normalize(parameters.genre);
  const mood = normalize(parameters.mood);
  const length = normalize(parameters.length);

  const recommendation = findRecommendation(genre, mood, length);

  res.json({
    fulfillmentText: `Based on your quest, I recommend ${recommendation.title}. ${recommendation.reason}`,
  });
});
