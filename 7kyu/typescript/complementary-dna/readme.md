# Complementary DNA

## 🏅 Rank
**7 kyu** (white)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Strings
- Fundamentals

---

## 💻 Langages Disponibles
- python
- javascript
- ruby
- coffeescript
- java
- haskell
- cpp
- csharp
- crystal
- php
- shell
- rust
- typescript
- clojure
- c
- go
- nasm
- kotlin
- julia
- prolog
- elixir
- r
- scala
- cobol
- d
- sql
- lua

---

## 📜 Description du Kata

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (**input --> output**)
~~~if-not:haskell
```
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
```
~~~
```if:haskell
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
```


---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/554e4a2f232cdd87d9000038)
- **Auteur** : [JustyFY](https://www.codewars.com/users/JustyFY)
- **Approuvé par** : [jhoffner](https://www.codewars.com/users/jhoffner)

---

## 📈 Statistiques
- **Total de tentatives** : 523558
- **Total de solutions validées** : 226556
- **Nombre d'étoiles** : ⭐ 2517
- **Score des votes** : 👍 14413
- **Suggestions non résolues** : 2
- **Problèmes non résolus** : 2

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (14 janvier 2025). Elles peuvent évoluer avec le temps.
