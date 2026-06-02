# Usability Test Plan

## Project Name

Library Quest

## Project Overview

Library Quest is a voice-based book discovery assistant that helps readers find their next book through a guided, quest-like conversation. The assistant asks about genre, mood, reading length, and content preferences before giving a recommendation.

The goal of this usability test is to evaluate whether users can understand the voice interaction, complete the recommendation flow, and feel that the assistant gives helpful, comfortable, and relevant prompts.

## Testing Goals

The main goals of this usability test are to find out whether users can:

* Understand what Library Quest does
* Start a book recommendation conversation
* Answer questions about genre, mood, length, and content avoidances
* Recover if they give a vague or unexpected answer
* Reach a final book recommendation
* Understand how to refine or restart the recommendation

## Target Users

The target users for this test are people who read books, listen to audiobooks, or are interested in finding new books. They do not need to be expert readers or heavy readers.

Ideal test users include:

* Casual readers
* Students
* People who use voice assistants
* Readers who sometimes struggle to choose their next book
* Readers who care about content warnings or emotional tone

## Number of Test Users

I plan to test the VUI with 3 to 5 users. This should be enough to find common usability issues, confusing prompts, and places where the conversation flow needs improvement.

## Testing Method

The test will use a think-aloud method. Users will be asked to interact with the Library Quest voice interface or prototype while explaining what they are thinking. If the full voice prototype is not complete, I can also use a scripted voice walkthrough where I act as the assistant and follow the planned dialogue flow.

During the test, I will observe:

* Whether the user understands each prompt
* Whether the user knows what to say next
* Whether the user seems confused or stuck
* Whether the assistant gives enough guidance
* Whether the final recommendation feels useful

## User Tasks

### Task 1: Start a Reading Quest

Prompt:

“You want help finding a new book to read. Start Library Quest and ask for a recommendation.”

Success criteria:

* User understands how to begin
* User can state that they want a book recommendation
* Assistant responds with a clear starting prompt

### Task 2: Choose a Genre and Mood

Prompt:

“You want a fantasy book that feels dark, but not too depressing.”

Success criteria:

* User can provide a genre
* User can provide a mood or tone
* Assistant correctly responds with follow-up questions

### Task 3: Set a Content Avoidance

Prompt:

“You are okay with dark themes, but you do not want major character death.”

Success criteria:

* User can tell the assistant what they want to avoid
* Assistant acknowledges the avoidance
* Assistant continues the recommendation flow without judgment or confusion

### Task 4: Choose a Reading Length

Prompt:

“You want something medium-length, not a huge book.”

Success criteria:

* User can choose a length
* Assistant understands the length preference
* Assistant uses the preference in the recommendation

### Task 5: Refine a Recommendation

Prompt:

“The first recommendation sounds too dark. Ask the assistant for something lighter.”

Success criteria:

* User can request a different recommendation
* Assistant understands the refinement
* Assistant adjusts the recommendation instead of restarting unnecessarily

### Task 6: Recover from a Vague Answer

Prompt:

“When the assistant asks what kind of book you want, say ‘I don’t know.’”

Success criteria:

* Assistant does not fail or stop the conversation
* Assistant gives helpful choices
* User can continue after the clarification prompt

## Pre-Test Questions

Before the test, I will ask:

1. How often do you read or listen to books?
2. How do you usually choose your next book?
3. Have you used a voice assistant before?
4. Do you usually search by genre, mood, tropes, reviews, or recommendations?
5. Do content warnings or avoidances matter when you choose a book?

## Post-Test Questions

After the test, I will ask:

1. Was it clear what Library Quest was supposed to help you do?
2. Were any prompts confusing or too vague?
3. Did the assistant ask too many questions, too few questions, or the right amount?
4. Did the “quest” theme make the experience more interesting?
5. Did the content avoidance question feel useful?
6. Did the final recommendation feel connected to your choices?
7. What would you change about the conversation?
8. Would you use a tool like this to find books?
9. Was there anything you expected the assistant to do that it did not do?

## Data I Will Collect

During testing, I will take notes on:

* Where users hesitate
* Which prompts are confusing
* Whether users know what types of answers are allowed
* Whether users complete the recommendation flow
* Whether the assistant needs better error handling
* Whether the final recommendation feels useful
* Suggestions users give after the test

## Possible Issues to Watch For

Some possible usability issues include:

* Users may not know what kinds of moods they can choose
* Users may give answers outside the planned categories
* Users may expect real book recommendations from a large database
* Users may not understand the “quest” theme immediately
* The content avoidance question may need to be worded carefully
* The assistant may need better responses for vague answers like “anything” or “I’m not sure”

## Planned Improvements Based on Testing

After testing, I will revise the VUI by:

* Rewording confusing prompts
* Adding more example responses
* Improving error handling for vague or unsupported answers
* Adjusting the number of questions in the flow
* Making the recommendation response clearer
* Improving the way the assistant explains why it chose a book

## Success Criteria for the Overall VUI

Library Quest will be considered successful if most users can:

* Understand the purpose of the assistant
* Complete the recommendation flow without major confusion
* Use genre, mood, length, and content preferences naturally
* Recover from vague or unexpected answers
* Feel that the assistant provides a helpful and engaging book discovery experience
