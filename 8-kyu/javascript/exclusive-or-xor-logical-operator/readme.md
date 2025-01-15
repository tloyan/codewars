# Exclusive "or" (xor) Logical Operator

## 🏅 Rank
**8 kyu** (white)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Fundamentals

---

## 💻 Langages Disponibles
- javascript
- ruby
- haskell
- python
- java
- coffeescript
- typescript
- clojure
- csharp
- cpp
- c
- nasm
- go
- cfml
- scala
- lua
- groovy
- dart

---

## 📜 Description du Kata

# Exclusive "or" (xor) Logical Operator

## Overview

In some scripting languages like PHP, there exists a logical operator (e.g. `&&`, `||`, `and`, `or`, etc.) called the "Exclusive Or" (hence the name of this Kata).  The exclusive or evaluates two booleans.  It then returns `true` if **exactly one of the two expressions are true**, `false` otherwise.  For example:


```php
false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
```

## Task

Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function `xor(a, b)` where `a` and `b` are the two expressions to be evaluated.  Your `xor` function should have the behaviour described above, returning `true` if **exactly one of the two expressions evaluate to true**, `false` otherwise.

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c)
- **Auteur** : [donaldsebleung](https://www.codewars.com/users/donaldsebleung)
- **Approuvé par** : [raulbc777](https://www.codewars.com/users/raulbc777)

---

## 📈 Statistiques
- **Total de tentatives** : 80771
- **Total de solutions validées** : 45153
- **Nombre d'étoiles** : ⭐ 262
- **Score des votes** : 👍 3090
- **Suggestions non résolues** : 0
- **Problèmes non résolus** : 0

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (15 janvier 2025). Elles peuvent évoluer avec le temps.
