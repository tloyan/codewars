# Tribonacci Sequence

## 🏅 Rank
**6 kyu** (yellow)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Number Theory
- Arrays
- Lists
- Fundamentals

---

## 💻 Langages Disponibles
- python
- javascript
- ruby
- haskell
- java
- coffeescript
- csharp
- elixir
- fsharp
- ocaml
- crystal
- php
- swift
- cpp
- scala
- kotlin
- c
- rust
- reason
- elm
- clojure
- go
- typescript
- dart
- factor
- groovy
- julia
- r
- racket
- cobol
- d

---

## 📜 Description du Kata

Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with `[1, 1, 1]` as a starting input (AKA *signature*), we have this sequence:

```
[1, 1 ,1, 3, 5, 9, 17, 31, ...]
```

But what if we started with `[0, 0, 1]` as a signature? As starting with `[0, 1]` instead of `[1, 1]` basically *shifts* the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

```
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
```

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a **signature** array/list, returns **the first n elements - signature included** of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if `n == 0`, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the <a href="http://www.codewars.com/kata/fibonacci-tribonacci-and-friends"  target="_blank" title="Xbonacci sequence">Xbonacci kata</a>

*[Personal thanks to Professor <a href="https://www.coursera.org/instructor/jimfowler" target="_blank" title="Jim Fowler">Jim Fowler</a> on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]*

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/556deca17c58da83c00002db)
- **Auteur** : [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)
- **Approuvé par** : [jhoffner](https://www.codewars.com/users/jhoffner)

---

## 📈 Statistiques
- **Total de tentatives** : 618008
- **Total de solutions validées** : 155888
- **Nombre d'étoiles** : ⭐ 3283
- **Score des votes** : 👍 11586
- **Suggestions non résolues** : 1
- **Problèmes non résolus** : 6

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (15 janvier 2025). Elles peuvent évoluer avec le temps.
