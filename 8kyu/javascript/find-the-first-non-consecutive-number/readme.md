# Find the first non-consecutive number

## 🏅 Rank
**8 kyu** (white)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Arrays
- Fundamentals

---

## 💻 Langages Disponibles
- javascript
- python
- ruby
- crystal
- java
- csharp
- haskell
- swift
- julia
- c
- dart
- nim
- rust
- scala
- typescript
- cobol

---

## 📜 Description du Kata

Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array `[1,2,3,4,6,7,8]` then `1` then `2` then `3` then `4` are all consecutive but `6` is not, so that's the first non-consecutive number.

```if:c
If a non consecutive number is found then return `true` and set the passed in pointer to the number found.

If the whole array is consecutive then return `false`.
```
```if-not:c
If the whole array is consecutive then return `null`<sup>2</sup>.
```
The array will always have at least `2` elements<sup>1</sup> and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

```if:c
<sup>1</sup> Can you write a solution that will return `false` for both `[]` and `[ x ]` (an empty array and one with a single number) though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
```
```if-not:c
<sup>1</sup> Can you write a solution that will return `null`<sup>2</sup> for both `[]` and `[ x ]` though?  (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

<sup>2</sup>  
Swift, Ruby and Crystal: `nil`  
Haskell: `Nothing`  
Python, Rust, Scala: `None`  
Julia: `nothing`  
Nim: `none(int)` (See [options](https://nim-lang.org/docs/options.html))
```

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)
- **Auteur** : [thecodeite](https://www.codewars.com/users/thecodeite)
- **Approuvé par** : [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

---

## 📈 Statistiques
- **Total de tentatives** : 285211
- **Total de solutions validées** : 65884
- **Nombre d'étoiles** : ⭐ 1071
- **Score des votes** : 👍 4772
- **Suggestions non résolues** : 1
- **Problèmes non résolus** : 1

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (14 janvier 2025). Elles peuvent évoluer avec le temps.
