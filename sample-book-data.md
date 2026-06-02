# Sample Book Data

This document contains sample book data for the Library Quest prototype. The books can be used as test recommendations during the voice interaction. For the final version, these could be replaced with real book data from an API or a larger database.

## Data Fields

Each sample book includes:

* Title
* Genre
* Mood
* Length
* Content notes
* Avoidance tags
* Recommendation reason

## Sample Books

### 1. The Lantern Road

Genre: Fantasy
Mood: Cozy, adventurous, mysterious
Length: Medium
Content notes: Mild danger, magical creatures, family secrets
Avoidance tags: No graphic violence, no major character death, no sexual content

Recommendation reason:

This book is a good match for readers who want a fantasy adventure that feels magical and mysterious without becoming too dark or emotionally heavy.

### 2. Hollow Crown City

Genre: Fantasy
Mood: Dark, political, intense
Length: Long
Content notes: Violence, betrayal, grief, morally gray characters
Avoidance tags: Graphic violence, heavy grief, major character death

Recommendation reason:

This book is a good match for readers who want a darker fantasy with political tension, complex characters, and emotional stakes.

### 3. Tea with the Moon Witch

Genre: Fantasy
Mood: Cozy, romantic, comforting
Length: Short
Content notes: Light romance, magical cottage, gentle conflict
Avoidance tags: No graphic violence, no horror, no major character death

Recommendation reason:

This book is a good match for readers who want a soft, cozy fantasy with romance and low emotional intensity.

### 4. Starship After Midnight

Genre: Science Fiction
Mood: Adventurous, strange, fast-paced
Length: Medium
Content notes: Space travel, danger, alien environments
Avoidance tags: Mild violence, no heavy grief, no major character death

Recommendation reason:

This book is a good match for readers who want a fast-paced science fiction adventure with strange worlds and a sense of discovery.

### 5. The House Beneath the Static

Genre: Horror
Mood: Unsettling, mysterious, dark
Length: Medium
Content notes: Psychological horror, haunted house, grief
Avoidance tags: Horror, heavy grief, disturbing imagery

Recommendation reason:

This book is a good match for readers who want something eerie and atmospheric with psychological tension.

### 6. A Study in Starlight

Genre: Mystery
Mood: Mysterious, thoughtful, calm
Length: Medium
Content notes: Murder investigation, secrets, academic setting
Avoidance tags: Mild violence, no graphic violence, no sexual content

Recommendation reason:

This book is a good match for readers who want a mystery with a thoughtful pace and atmospheric setting without intense gore.

### 7. The Last Bookshop in June

Genre: Contemporary Fiction
Mood: Emotional, comforting, reflective
Length: Short
Content notes: Family conflict, grief, healing, friendship
Avoidance tags: Heavy grief

Recommendation reason:

This book is a good match for readers who want an emotional but hopeful story about connection, change, and healing.

### 8. Love in the Margins

Genre: Romance
Mood: Romantic, funny, comforting
Length: Medium
Content notes: Miscommunication, workplace tension, light emotional conflict
Avoidance tags: No graphic violence, no horror, no major character death

Recommendation reason:

This book is a good match for readers who want a light romance with humor, warmth, and a low-stress emotional arc.

## Recommendation Matching Examples

### User Preference Set 1

User wants:

* Genre: Fantasy
* Mood: Cozy
* Length: Short
* Avoids: Horror, graphic violence, major character death

Best match:

Tea with the Moon Witch

Reason:

It matches the fantasy genre, cozy mood, shorter length, and avoids the user’s stated content avoidances.

### User Preference Set 2

User wants:

* Genre: Science Fiction
* Mood: Adventurous
* Length: Medium
* Avoids: Heavy grief

Best match:

Starship After Midnight

Reason:

It matches the science fiction genre, adventurous tone, medium length, and does not focus on heavy grief.

### User Preference Set 3

User wants:

* Genre: Fantasy
* Mood: Dark
* Length: Long
* Avoids: Nothing

Best match:

Hollow Crown City

Reason:

It matches the fantasy genre, darker tone, longer length, and intense emotional stakes.

### User Preference Set 4

User wants:

* Genre: Mystery
* Mood: Calm or thoughtful
* Length: Medium
* Avoids: Graphic violence

Best match:

A Study in Starlight

Reason:

It matches the mystery genre and thoughtful tone while avoiding graphic violence.

## Notes for Prototype Use

Because this is a voice user interface prototype, the assistant does not need a large database to demonstrate the core interaction. The goal is to show how the assistant collects user preferences, handles vague answers, respects content avoidances, and explains why a recommendation was chosen.

In a future version, Library Quest could connect to a book API or larger recommendation database. The same categories used here, such as genre, mood, length, and content avoidances, could be used to filter real book data.
