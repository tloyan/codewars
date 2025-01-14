# Powers of 2

## 🏅 Rank
**8 kyu** (white)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Mathematics
- Fundamentals

---

## 💻 Langages Disponibles
- haskell
- python
- coffeescript
- javascript
- ruby
- csharp
- fsharp
- ocaml
- julia
- java
- cpp
- c
- cobol
- lambdacalc
- factor
- go
- lua
- riscv
- bf
- typescript
- rust
- d
- prolog
- php

---

## 📜 Description du Kata

Complete the function that takes a non-negative integer `n` as input, and returns a list of all the powers of `2` with the exponent ranging from `0` to `n` ( inclusive ).

## Examples

```python
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
```
```bf
  n = String.fromCharCode(0)  ==> String.fromCharCode(1)
  n = String.fromCharCode(1)  ==> String.fromCharCode(1) + String.fromCharCode(2)
  n = String.fromCharCode(2)  ==> String.fromCharCode(1) + String.fromCharCode(2) + String.fromCharCode(4)
```
~~~if:lambdacalc
## Encodings

`purity: LetRec`  
`numEncoding: BinaryScott`  
export `foldr` for your `List` encoding
~~~

~~~if:riscv
RISC-V: The function signature is:

```c
void powers_of_two(size_t n, uint64_t powers[n + 1]);
```

Write the result to `powers`. You may assume it is large enough to hold the result. You should not return anything.
~~~
~~~if:bf
- Since BF doesn't have arrays, you should output each element individually.
- Outputs will always fit within a byte
~~~


---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/57a083a57cb1f31db7000028)
- **Auteur** : [wichu](https://www.codewars.com/users/wichu)
- **Approuvé par** : [suic](https://www.codewars.com/users/suic)

---

## 📈 Statistiques
- **Total de tentatives** : 153155
- **Total de solutions validées** : 66285
- **Nombre d'étoiles** : ⭐ 602
- **Score des votes** : 👍 4236
- **Suggestions non résolues** : 0
- **Problèmes non résolus** : 0

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (14 janvier 2025). Elles peuvent évoluer avec le temps.
