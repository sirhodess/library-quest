# Dialogue Flow

This document outlines the main conversation flow for Library Quest.

## Primary User Goal

The user wants to find a book recommendation based on reading preferences such as genre, mood, tone, length, and content avoidances.

## Main Flow

### 1. Welcome

Assistant: Welcome to Library Quest. What kind of reading quest are you starting today?

Possible user responses:

* I want fantasy.
* I want something cozy.
* I need a book recommendation.
* I want something dark but not too sad.
* I do not know what I want.

### 2. Genre Selection

Assistant: What genre are you interested in: fantasy, science fiction, romance, mystery, horror, literary fiction, or something else?

Possible user responses:

* Fantasy
* Science fiction
* Romance
* Mystery
* Horror
* I am not sure

### 3. Mood or Tone Selection

Assistant: What kind of mood are you looking for: cozy, adventurous, dark, romantic, emotional, funny, or strange?

Possible user responses:

* Cozy
* Dark
* Romantic
* Emotional
* Weird
* Something fast-paced
* Something calm

### 4. Content Preferences

Assistant: Are there any themes you want to avoid, such as graphic violence, major character death, horror, sexual content, or heavy grief?

Possible user responses:

* Avoid graphic violence.
* No major character death.
* No horror.
* I am okay with anything.
* Nothing too heavy.

### 5. Reading Length

Assistant: Do you want a short, medium, or long read?

Possible user responses:

* Short
* Medium
* Long
* Something quick
* Something immersive

### 6. Recommendation

Assistant: Based on your quest, I recommend [Book Title]. It matches your interest in [genre], has a [mood] tone, and avoids [content avoidance]. Would you like another recommendation or more details?

Possible user responses:

* Tell me more.
* Give me another option.
* Start over.
* That sounds good.

## Error Handling

### User gives a vague answer

User: I do not know.

Assistant: That is okay. Do you want something comforting, exciting, romantic, mysterious, or emotionally intense?

### User gives an unsupported genre

User: I want cookbook fantasy.

Assistant: I do not have that exact category yet, but I can help with fantasy, cozy books, romance, mystery, horror, science fiction, or literary fiction. Which one is closest?

### User changes their mind

User: Actually, not fantasy.

Assistant: No problem. What genre would you like to switch to?

### User wants to stop

User: Stop.

Assistant: Ending your quest. You can come back anytime to search for your next read.
