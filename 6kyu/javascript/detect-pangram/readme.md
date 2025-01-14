# Detect Pangram

## 🏅 Rank
**6 kyu** (yellow)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Strings
- Data Structures
- Fundamentals

---

## 💻 Langages Disponibles
- python
- haskell
- clojure
- javascript
- csharp
- java
- r
- ruby
- php
- c
- prolog
- pascal
- typescript
- lambdacalc
- factor
- cobol
- rust
- lua

---

## 📜 Description du Kata

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). 

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

```if:prolog
**Note for prolog users**: your task is to write a predicate **is_pangram/1** instead.
```
```if:lambdacalc
**For Lambda Calculus**: the string is a list of [BinaryScott-encoded numbers](https://github.com/codewars/lambda-calculus/wiki/encodings-guide#scott-binary-encoded-numerals) representing [Unicode code points](https://en.wikipedia.org/wiki/List_of_Unicode_characters#Basic_Latin).*

`succ :: Number -> Number` and `add :: Number -> Number -> Number` are provided for free, if you need them. Church boolean and Scott list encodings are also provided for free, but you can optionally use your own encodings by replacing the exported functions `if-then-else`, `nil`, and `cons`, which are used by the tests.

- purity: `LetRec`
- numEncoding: `BinaryScott`

**For example, the letter 'B' is represented by the decimal code point 66, which in big-endian binary is `1000010`, and therefore in little-endian BinaryScott would be `Bit0 (Bit1 (Bit0 (Bit0 (Bit0 (Bit0 (Bit1 End))))))`.*
```


---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)
- **Auteur** : [anindyabd](https://www.codewars.com/users/anindyabd)
- **Approuvé par** : [xcthulhu](https://www.codewars.com/users/xcthulhu)

---

## 📈 Statistiques
- **Total de tentatives** : 685644
- **Total de solutions validées** : 185841
- **Nombre d'étoiles** : ⭐ 2632
- **Score des votes** : 👍 11129
- **Suggestions non résolues** : 10
- **Problèmes non résolus** : 5

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (14 janvier 2025). Elles peuvent évoluer avec le temps.
