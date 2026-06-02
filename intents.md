# Intents and Slots

This document outlines the main intents and slots for Library Quest.

## Intents

### StartQuestIntent

Purpose: Starts the book discovery conversation.

Example utterances:

* Start Library Quest.
* Help me find a book.
* I need a book recommendation.
* I want to find my next read.

### ChooseGenreIntent

Purpose: Captures the genre the user wants.

Example utterances:

* I want fantasy.
* Give me science fiction.
* I am looking for romance.
* I want a mystery.
* Something literary.

Slots:

* genre

Possible genre values:

* fantasy
* science fiction
* romance
* mystery
* horror
* literary fiction
* contemporary
* historical fiction

### ChooseMoodIntent

Purpose: Captures the mood or tone the user wants.

Example utterances:

* I want something cozy.
* Something dark.
* I want a romantic book.
* Something strange.
* Something emotional.
* Something funny.

Slots:

* mood

Possible mood values:

* cozy
* dark
* adventurous
* romantic
* emotional
* funny
* strange
* mysterious
* comforting

### SetContentAvoidanceIntent

Purpose: Captures themes or content the user wants to avoid.

Example utterances:

* Avoid graphic violence.
* No major character death.
* Nothing too scary.
* I do not want heavy grief.
* No sexual content.
* I am okay with anything.

Slots:

* contentAvoidance

Possible contentAvoidance values:

* graphic violence
* major character death
* horror
* sexual content
* heavy grief
* abuse
* gore

### ChooseLengthIntent

Purpose: Captures the user’s preferred book length.

Example utterances:

* I want something short.
* A medium length book.
* Something long and immersive.
* A quick read.
* I want a big book.

Slots:

* length

Possible length values:

* short
* medium
* long

### GetRecommendationIntent

Purpose: Gives the user a recommendation based on the collected slots.

Example utterances:

* Give me the recommendation.
* What book should I read?
* What do you recommend?
* Find my book.

### RefineRecommendationIntent

Purpose: Allows the user to adjust the recommendation.

Example utterances:

* Give me another option.
* Something less dark.
* Something more romantic.
* Make it shorter.
* I want a different genre.

### HelpIntent

Purpose: Explains what the assistant can do.

Example utterances:

* Help.
* What can you do?
* How does this work?

### StopIntent

Purpose: Ends the conversation.

Example utterances:

* Stop.
* Cancel.
* End quest.
* I am done.
