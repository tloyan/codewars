# Are they the "same"?

## 🏅 Rank
**6 kyu** (yellow)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Fundamentals

---

## 💻 Langages Disponibles
- ruby
- csharp
- python
- java
- clojure
- haskell
- javascript
- coffeescript
- elixir
- typescript
- cpp
- php
- crystal
- fsharp
- c
- rust
- swift
- r
- scala
- shell
- ocaml
- julia
- kotlin
- powershell
- go
- nim
- purescript
- nasm
- racket
- groovy
- prolog
- cfml
- fortran
- haxe
- dart
- pascal
- lua
- perl
- d
- elm
- cobol
- erlang

---

## 📜 Description du Kata

Given two arrays `a` and `b` write a function `comp(a, b)` (or`compSame(a, b)`) that checks whether the two arrays have the "same" elements, with the same *multiplicities* (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in `b` are the elements in `a` squared, regardless of the order.

#### Examples
##### Valid arrays
```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
```
`comp(a, b)` returns true because in `b` 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write `b`'s elements in terms of squares:
```
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
```
##### Invalid arrays
If, for example, we change the first number to something else, `comp` is not returning true anymore:
```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
```
`comp(a,b)` returns false because in `b` 132 is not the square of any number of `a`.
```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
```
`comp(a,b)` returns false because in `b` 36100 is not the square of any number of `a`.

#### Remarks
- `a` or `b` might be `[] or {}` (all languages except R, Shell).
- `a` or `b` might be `nil` or `null` or `None` or `nothing` (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift). 

If `a` or `b` are `nil` (or `null` or `None`, depending on the language), the problem doesn't make sense so return false.

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/550498447451fbbd7600041c)
- **Auteur** : [g964](https://www.codewars.com/users/g964)
- **Approuvé par** : [jhoffner](https://www.codewars.com/users/jhoffner)

---

## 📈 Statistiques
- **Total de tentatives** : 1964866
- **Total de solutions validées** : 104471
- **Nombre d'étoiles** : ⭐ 3925
- **Score des votes** : 👍 5475
- **Suggestions non résolues** : 38
- **Problèmes non résolus** : 3

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (15 janvier 2025). Elles peuvent évoluer avec le temps.
