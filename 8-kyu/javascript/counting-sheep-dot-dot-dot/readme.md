# Counting sheep...

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
- java
- ruby
- python
- csharp
- haskell
- elixir
- cpp
- rust
- typescript
- scala
- c
- crystal
- racket
- julia
- go
- coffeescript
- factor
- bf
- php
- dart

---

## 📜 Description du Kata

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

```csharp
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```
```crystal
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```
```dart
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```
```elixir
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```
```javascript
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```
```haskell
[True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True]
```
```python
[True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True]
```
```c
{ true,  true,  true,  false,
  true,  true,  true,  true,
  true,  false, true,  false,
  true,  false, false, true,
  true,  true,  true,  true,
  false, false, true,  true }
```
```cpp
{ true,  true,  true,  false,
  true,  true,  true,  true,
  true,  false, true,  false,
  true,  false, false, true,
  true,  true,  true,  true,
  false, false, true,  true }
```
```rust
&[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```
```scala
Array(
  true,  true,  true,  false,
  true,  true,  true,  true,
  true,  false, true,  false,
  true,  false, false, true,
  true,  true,  true,  true,
  false, false, true,  true
)
```
```racket
;for racket in this kata, 
;only values that are exactly #t count as sheep. 
;any other value is not a sheep.
(count-sheeps '(#t #t #t #f #t #t 1
                #t #f #f #f #f #f #f
                #t #f #t #t #t #t #t
                #t #t #f #t #t #t 5))
```
```factor
{ t t t f
  t t t t
  t f t f
  t f f t
  t t t t
  f f t t }
```
```bf
"tttftttttftftfftttttfftt"
```


The correct answer would be `17`.

Hint: Don't forget to check for bad values like `null`/`undefined`

```if:bf
In BF, true is represented as the letter 't' (ASCII 116), while false is represented as the letter 'f' (ASCII 102) 

Input streams will be terminated with a null character
```


---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/54edbc7200b811e956000556)
- **Auteur** : [tfKamran](https://www.codewars.com/users/tfKamran)
- **Approuvé par** : [jhoffner](https://www.codewars.com/users/jhoffner)

---

## 📈 Statistiques
- **Total de tentatives** : 698646
- **Total de solutions validées** : 265785
- **Nombre d'étoiles** : ⭐ 1802
- **Score des votes** : 👍 13041
- **Suggestions non résolues** : 7
- **Problèmes non résolus** : 4

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (15 janvier 2025). Elles peuvent évoluer avec le temps.
