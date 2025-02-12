# Define a card suit

## 🏅 Rank
**8 kyu** (white)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Fundamentals
- Strings

---

## 💻 Langages Disponibles
- javascript
- ruby
- python
- csharp
- c
- lua

---

## 📜 Description du Kata

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):
```javascript,c
deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
```
```ruby
DECK = ['2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS','AS',
        '2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','AD',
        '2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AH',
        '2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC','AC']
```
```python
DECK = ['2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS','AS',
        '2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','AD',
        '2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AH',
        '2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC','AC']
```
```csharp
string[] Deck =
{
    "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣", "A♣",
    "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦", "A♦",
    "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥", "A♥",
    "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠", "A♠"
};
```
```lua
local DECK = {'2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS','AS',
              '2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','AD',
              '2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AH',
              '2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC','AC'}
```

```javascript
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
```
```ruby
('3C') -> return 'clubs'
('3D') -> return 'diamonds'
('3H') -> return 'hearts'
('3S') -> return 'spades'
```
```python
('3C') -> return 'clubs'
('3D') -> return 'diamonds'
('3H') -> return 'hearts'
('3S') -> return 'spades'
```
```csharp
DefineSuit("3♣") -> return "clubs"
DefineSuit("3♦") -> return "diamonds"
DefineSuit("3♥") -> return "hearts"
DefineSuit("3♠") -> return "spades"
```
```lua
('3C') -> return 'clubs'
('3D') -> return 'diamonds'
('3H') -> return 'hearts'
('3S') -> return 'spades'
```

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/5a360620f28b82a711000047)
- **Auteur** : [Dmitry Kudla](https://www.codewars.com/users/Dmitry%20Kudla)
- **Approuvé par** : [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

---

## 📈 Statistiques
- **Total de tentatives** : 47183
- **Total de solutions validées** : 18978
- **Nombre d'étoiles** : ⭐ 144
- **Score des votes** : 👍 1937
- **Suggestions non résolues** : 8
- **Problèmes non résolus** : 0

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (15 janvier 2025). Elles peuvent évoluer avec le temps.
