# Dialogflow Build Guide

## Project Name

Library Quest

## Project Overview

Library Quest is a voice-based book discovery assistant that helps users find their next read through a guided, quest-like conversation. The assistant asks about genre, mood, content preferences, and reading length before giving a recommendation.

The goal of this Dialogflow prototype is to demonstrate how a voice user interface can guide users through a recommendation process while supporting vague answers, preference refinement, and content avoidances.

## Platform

This prototype is designed for Dialogflow ES.

## Agent Setup

### Agent Name

Library Quest

### Default Language

English

### Time Zone

United States Pacific Time

### Purpose

The Dialogflow agent acts as a voice assistant that guides the user through a book discovery flow. It does not use a full external book database in the current prototype. Instead, it uses sample book data and scripted recommendation responses to demonstrate the intended interaction.

## Conversation Flow Summary

The main conversation flow is:

1. Welcome the user
2. Start the reading quest
3. Ask for genre
4. Ask for mood
5. Ask for content avoidances
6. Ask for reading length
7. Give a recommendation
8. Allow the user to refine, restart, or end the quest

## Entities

The following custom entities should be created in Dialogflow.

### Genre Entity

Entity name:

`genre`

Possible values:

* fantasy
* science fiction
* sci-fi
* romance
* mystery
* horror
* literary fiction
* contemporary fiction
* historical fiction

Purpose:

This entity captures the type of book the user wants.

Example user phrases:

* I want fantasy.
* Give me science fiction.
* I am looking for romance.
* I want a mystery.
* Something literary.

### Mood Entity

Entity name:

`mood`

Possible values:

* cozy
* adventurous
* dark
* romantic
* emotional
* funny
* strange
* mysterious
* comforting
* calm
* fast-paced

Purpose:

This entity captures the emotional tone or reading experience the user wants.

Example user phrases:

* I want something cozy.
* Something dark.
* Dark, but not depressing.
* Something mysterious.
* I want a comforting read.

### Content Avoidance Entity

Entity name:

`contentAvoidance`

Possible values:

* graphic violence
* major character death
* horror
* sexual content
* heavy grief
* gore
* abuse
* disturbing imagery

Purpose:

This entity captures themes or content the user does not want in the recommendation.

Example user phrases:

* Avoid graphic violence.
* No major character death.
* Nothing too scary.
* No heavy grief.
* No sexual content.

### Length Entity

Entity name:

`length`

Possible values:

* short
* medium
* long
* quick read
* immersive read
* not too long

Purpose:

This entity captures the user’s preferred reading length.

Example user phrases:

* I want something short.
* A medium-length book.
* Something long and immersive.
* A quick read.
* Not too long.

## Intents

## Default Welcome Intent

### Purpose

Welcomes the user and introduces Library Quest.

### Training Phrases

* Hi
* Hello
* Open Library Quest
* Talk to Library Quest
* Start Library Quest

### Response

Welcome to Library Quest. I can help you find your next read by guiding you through genre, mood, length, and content preferences. Say “start quest” to begin.

## StartQuestIntent

### Purpose

Begins the main book recommendation flow.

### Training Phrases

* Start quest
* Help me find a book
* I need a book recommendation
* Recommend a book
* Find my next read
* I want something to read
* Help me choose a book

### Response

Great. What kind of reading quest are you starting today? You can choose fantasy, science fiction, romance, mystery, horror, literary fiction, or say you are not sure.

### Output Context

`awaiting_genre`

## ChooseGenreIntent

### Purpose

Captures the user’s preferred genre.

### Input Context

`awaiting_genre`

### Training Phrases

* Fantasy
* I want fantasy
* Science fiction
* I want sci-fi
* Romance
* Mystery
* Horror
* Literary fiction
* I am not sure
* I do not know what genre I want

### Parameter

`genre`

### Response

Great. What kind of mood should this quest have? You can choose cozy, adventurous, dark, romantic, emotional, funny, strange, mysterious, or comforting.

### Output Context

`awaiting_mood`

## ChooseMoodIntent

### Purpose

Captures the mood or tone the user wants.

### Input Context

`awaiting_mood`

### Training Phrases

* Cozy
* Something cozy
* Dark
* Something dark but not depressing
* Romantic
* Adventurous
* Mysterious
* Funny
* Strange
* Comforting
* I want something emotional

### Parameter

`mood`

### Response

Got it. Are there any themes you want to avoid, such as graphic violence, major character death, horror, sexual content, or heavy grief? You can also say you are okay with anything.

### Output Context

`awaiting_avoidance`

## SetContentAvoidanceIntent

### Purpose

Captures themes or content the user wants to avoid.

### Input Context

`awaiting_avoidance`

### Training Phrases

* Avoid graphic violence
* No major character death
* Nothing too scary
* Avoid horror
* No heavy grief
* No sexual content
* I am okay with anything
* Nothing to avoid
* I do not have any avoidances

### Parameter

`contentAvoidance`

### Response

Understood. Do you want a short, medium, or long read?

### Output Context

`awaiting_length`

## ChooseLengthIntent

### Purpose

Captures the user’s preferred reading length and gives a recommendation.

### Input Context

`awaiting_length`

### Training Phrases

* Short
* Something short
* Medium
* Medium length
* Long
* Something immersive
* A quick read
* A big book
* Not too long

### Parameter

`length`

### Response

Based on your quest, I recommend The Lantern Road. It is a medium-length fantasy with a mysterious and adventurous tone. It includes magical danger and family secrets, but avoids graphic violence, major character death, and heavy grief. Would you like another option, more details, or would you like to start over?

### Output Context

`recommendation_given`

## RefineRecommendationIntent

### Purpose

Allows the user to ask for a different recommendation or adjust the recommendation.

### Input Context

`recommendation_given`

### Training Phrases

* Give me another option
* I want something different
* Tell me more
* Something lighter
* Something darker
* Make it shorter
* I want a different genre
* Start over

### Response

Sure. We can adjust your quest. You can ask for another option, choose a different mood, change the length, or start over.

## HelpIntent

### Purpose

Explains what Library Quest can do.

### Training Phrases

* Help
* What can you do?
* How does this work?
* What should I say?
* I need help

### Response

Library Quest helps you find a book by asking about genre, mood, content avoidances, and reading length. You can say things like “I want fantasy,” “something cozy,” “avoid major character death,” or “give me a short read.”

## StopIntent

### Purpose

Ends the conversation.

### Training Phrases

* Stop
* Cancel
* End quest
* I am done
* Never mind

### Response

Ending your quest. You can come back anytime when you are ready to search for your next read.

## Default Fallback Intent

### Purpose

Handles unclear or unsupported user input.

### Response

I did not quite catch that. You can tell me a genre, mood, content avoidance, or reading length. For example, you can say “fantasy,” “something cozy,” “avoid graphic violence,” or “medium length.”

## Context Map

The conversation uses contexts to keep the user moving through the recommendation flow.

| Intent                     | Input Context        | Output Context       |
| -------------------------- | -------------------- | -------------------- |
| StartQuestIntent           | None                 | awaiting_genre       |
| ChooseGenreIntent          | awaiting_genre       | awaiting_mood        |
| ChooseMoodIntent           | awaiting_mood        | awaiting_avoidance   |
| SetContentAvoidanceIntent  | awaiting_avoidance   | awaiting_length      |
| ChooseLengthIntent         | awaiting_length      | recommendation_given |
| RefineRecommendationIntent | recommendation_given | recommendation_given |

## Sample Recommendation Logic

For this prototype, the recommendation can be scripted instead of connected to a real API.

Example recommendation:

The Lantern Road

Reason:

This recommendation works for users who want a fantasy book with a mysterious or adventurous mood, medium length, and fewer heavy content concerns.

Other possible recommendation responses:

### Cozy Fantasy Recommendation

Based on your quest, I recommend Tea with the Moon Witch. It is a short cozy fantasy with light romance, magical cottage settings, and gentle conflict. It is a good match if you want something comforting and low stress.

### Science Fiction Recommendation

Based on your quest, I recommend Starship After Midnight. It is a medium-length science fiction adventure with strange worlds, fast pacing, and a sense of discovery.

### Mystery Recommendation

Based on your quest, I recommend A Study in Starlight. It is a thoughtful mystery with an atmospheric setting and a calm investigative tone.

### Romance Recommendation

Based on your quest, I recommend Love in the Margins. It is a medium-length romance with humor, warmth, and a low-stress emotional arc.

## Testing Plan in Dialogflow

To test the agent, I will use the Dialogflow simulator and try several user paths.

### Test Path 1: Standard Flow

User says:

* Start quest
* Fantasy
* Dark but not depressing
* Avoid major character death
* Medium

Expected result:

The assistant should move through the genre, mood, content avoidance, and length prompts before giving a recommendation.

### Test Path 2: Vague User

User says:

* Start quest
* I do not know

Expected result:

The assistant should provide helpful choices instead of ending the conversation.

### Test Path 3: Content Avoidance

User says:

* Start quest
* Fantasy
* Cozy
* No horror
* Short

Expected result:

The assistant should acknowledge the avoidance and continue the flow.

### Test Path 4: Refinement

User says:

* Give me another option

Expected result:

The assistant should allow the user to refine the recommendation instead of restarting the entire conversation.

### Test Path 5: Stop

User says:

* Stop

Expected result:

The assistant should end the quest politely.

## Screenshots to Include

The final repository should include screenshots of:

* Dialogflow agent overview
* Custom entities
* Intent list
* One completed intent with training phrases
* Context settings for one intent
* Dialogflow simulator test conversation

Suggested folder:



## Limitations

This prototype focuses on conversation design rather than a full recommendation algorithm. The current version uses scripted sample recommendations. A future version could connect to a book API or larger database to generate more dynamic results.

## Future Improvements

Possible future improvements include:

* Connect to a real book API
* Add more genres and moods
* Add trope-based discovery
* Support multiple recommendations at once
* Improve personalized recommendation logic
* Add richer content warning categories
* Add user profiles or saved preferences
* Add accessibility-focused reading preferences, such as audiobook availability or shorter chapter lengths

## Reflection

Building Library Quest in Dialogflow helped me think through how a voice user interface guides users step by step. Instead of presenting a long list of filters, the assistant uses a conversation to narrow down the recommendation. This makes the interaction feel more approachable, especially for users who may not know exactly what they want to read yet.

The most important design challenge was balancing structure and flexibility. The assistant needs enough structure to collect useful information, but it also needs to handle vague answers, unexpected responses, and changes in user preference.
