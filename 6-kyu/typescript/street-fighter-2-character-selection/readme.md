# Street Fighter 2 - Character Selection

## 🏅 Rank
**6 kyu** (yellow)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Arrays
- Lists
- Fundamentals
- Graph Theory

---

## 💻 Langages Disponibles
- python
- javascript
- typescript
- csharp
- java
- ruby
- swift
- clojure
- rust

---

## 📜 Description du Kata

**Short Intro**

Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

Can you solve this kata? Suuure-You-Can!

UPDATE: a new kata's harder version is available [here](https://www.codewars.com/kata/street-fighter-2-character-selection-part-2/python).

**The Kata**

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid.
Such screen looks like this:

Screen:

![screen](https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fightersgeneration.com%2Fnp5%2Fgm%2Fsf2ce-s2.jpg&f=1 "Character Selection Screen for Street Fighter 2")

Selection Grid Layout in text:
```
| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
```

**Input**

- the list of game characters in a 2x6 grid;
- the initial position of the selection cursor (top-left is `(0,0)`);
- a list of moves of the selection cursor (which are `up`, `down`, `left`, `right`);

~~~if:rust
The `preloaded` module defines the following `enum`:

```rust
#[derive(Debug)]
pub enum Direction {
    Up,
    Down,
    Left,
    Right,
}
```
~~~

**Output**

- the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);

**Rules**

Selection cursor is circular *horizontally* but *not vertically*!

As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

**Test**

For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

**Notice**: changing some of the input data might not help you.

**Examples**

1.
```
fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']
```
then I should get:
```
['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
```
as the characters I've been hovering with the selection cursor during my moves.
Notice: Ryu is the first just because it "fails" the first `up`
See test cases for more examples.

2.
```
fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
```
Result:
```
['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
```

**OFF-TOPIC**

Some music to get in the mood for this kata :

[Street Fighter 2 - selection theme](https://www.youtube.com/watch?v=GR3d9FMBkC8)

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/5853213063adbd1b9b0000be)
- **Auteur** : [mmalkavian](https://www.codewars.com/users/mmalkavian)
- **Approuvé par** : [user5036852](https://www.codewars.com/users/user5036852)

---

## 📈 Statistiques
- **Total de tentatives** : 47437
- **Total de solutions validées** : 11901
- **Nombre d'étoiles** : ⭐ 777
- **Score des votes** : 👍 1500
- **Suggestions non résolues** : 4
- **Problèmes non résolus** : 6

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (17 janvier 2025). Elles peuvent évoluer avec le temps.
