# Consecutive strings

## 🏅 Rank
**6 kyu** (yellow)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Fundamentals

---

## 💻 Langages Disponibles
- ruby
- python
- javascript
- coffeescript
- haskell
- clojure
- csharp
- java
- elixir
- cpp
- php
- typescript
- crystal
- fsharp
- c
- ocaml
- rust
- swift
- go
- r
- shell
- kotlin
- powershell
- julia
- scala
- nim
- reason
- racket
- dart
- haxe
- pascal
- raku
- lua
- perl
- elm
- cobol
- d
- erlang
- prolog

---

## 📜 Description du Kata

You are given an array(list) `strarr` of strings and an integer `k`. Your task is to return the **first** longest string
consisting of k **consecutive** strings taken in the array.

#### Examples:
```
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
```
n being the length of the string array, if `n = 0` or `k > n` or `k <= 0` return "" (return `Nothing` in Elm, "nothing" in Erlang).

#### Note
consecutive strings : follow one after another without an interruption

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/56a5d994ac971f1ac500003e)
- **Auteur** : [g964](https://www.codewars.com/users/g964)
- **Approuvé par** : [myjinxin2015](https://www.codewars.com/users/myjinxin2015)

---

## 📈 Statistiques
- **Total de tentatives** : 513284
- **Total de solutions validées** : 80317
- **Nombre d'étoiles** : ⭐ 3474
- **Score des votes** : 👍 5841
- **Suggestions non résolues** : 12
- **Problèmes non résolus** : 0

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (15 janvier 2025). Elles peuvent évoluer avec le temps.
