# Growth of a Population

## 🏅 Rank
**7 kyu** (white)

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
- java
- csharp
- clojure
- cpp
- php
- crystal
- fsharp
- c
- typescript
- r
- nim
- shell
- ocaml
- lua
- kotlin
- fortran
- elixir
- julia
- powershell
- go
- rust
- reason
- racket
- forth
- factor
- dart
- elm
- scala
- prolog
- haxe
- raku
- pascal
- perl
- d
- cobol

---

## 📜 Description du Kata

In a small town the population is `p0 = 1000` at the beginning of a year. The population
regularly increases by `2 percent` per year and moreover `50` new inhabitants per year come to live in the town. 
How many years does the town need to see its population
greater than or equal to `p = 1200` inhabitants?

```
At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
```
More generally given parameters:

`p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)`

the function `nb_year` should return `n` number of entire years needed to get a population greater or equal to `p`.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

```
Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
```

#### Note: 
* Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

* There are no fractions of people. At the end of each year, the population count is an integer: `252.8` people round down to `252` persons.

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/563b662a59afc2b5120000c6)
- **Auteur** : [g964](https://www.codewars.com/users/g964)
- **Approuvé par** : [joh_pot](https://www.codewars.com/users/joh_pot)

---

## 📈 Statistiques
- **Total de tentatives** : 1051458
- **Total de solutions validées** : 164352
- **Nombre d'étoiles** : ⭐ 2580
- **Score des votes** : 👍 10095
- **Suggestions non résolues** : 9
- **Problèmes non résolus** : 1

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (15 janvier 2025). Elles peuvent évoluer avec le temps.
