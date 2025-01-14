# Basic Mathematical Operations

## 🏅 Rank
**8 kyu** (white)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Mathematics
- Fundamentals

---

## 💻 Langages Disponibles
- javascript
- php
- python
- coffeescript
- c
- csharp
- ruby
- java
- typescript
- cpp
- nasm
- elixir
- haskell
- r
- crystal
- julia
- rust
- scala
- cobol
- lua
- dart

---

## 📜 Description du Kata

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).  
The function should return result of numbers after applying the chosen operation.

### Examples(Operator, value1, value2) --> output

~~~if-not:nasm
```
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
```
~~~

~~~if:nasm
```nasm
mov dil, '+'
mov rax, __float64__(4.0)
mov rdx, __float64__(7.0)
movq xmm0, rax
movq xmm1, rdx
call basic_op        ; XMM0 <- 11.0

mov dil, '-'
mov rax, __float64__(15.0)
mov rdx, __float64__(18.0)
movq xmm0, rax
movq xmm1, rdx
call basic_op        ; XMM0 <- -3.0

mov dil, '*'
mov rax, __float64__(5.0)
movq xmm0, rax
movq xmm1, rax
call basic_op        ; XMM0 <- 25.0

mov dil, '/'
mov rax, __float64__(49.0)
mov rdx, __float64__(7.0)
movq xmm0, rax
movq xmm1, rdx
call basic_op        ; XMM0 <- 7.0
```
~~~

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/57356c55867b9b7a60000bd7)
- **Auteur** : [Quickz](https://www.codewars.com/users/Quickz)
- **Approuvé par** : [matt c](https://www.codewars.com/users/matt%20c)

---

## 📈 Statistiques
- **Total de tentatives** : 394184
- **Total de solutions validées** : 221970
- **Nombre d'étoiles** : ⭐ 1268
- **Score des votes** : 👍 10905
- **Suggestions non résolues** : 3
- **Problèmes non résolus** : 4

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (14 janvier 2025). Elles peuvent évoluer avec le temps.
