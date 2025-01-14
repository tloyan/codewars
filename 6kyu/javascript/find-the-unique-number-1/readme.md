# Find the unique number

## 🏅 Rank
**6 kyu** (yellow)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Fundamentals
- Algorithms
- Arrays
- Performance

---

## 💻 Langages Disponibles
- javascript
- php
- python
- java
- typescript
- go
- csharp
- haskell
- ruby
- fsharp
- swift
- cobol
- d
- c
- nasm
- cpp
- rust

---

## 📜 Description du Kata

There is an array with some numbers. All numbers are equal except for one. Try to find it!

```javascript
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
```

```swift
findUniq([ 1, 1, 1, 2, 1, 1 ]) == 2
findUniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
```

```ruby
find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
```

```python
find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
```

```java
Kata.findUniq(new double[]{ 1, 1, 1, 2, 1, 1 }); // => 2
Kata.findUniq(new double[]{ 0, 0, 0.55, 0, 0 }); // => 0.55
```

```haskell
getUnique [1, 1, 1, 2, 1, 1] -- Result is 2
getUnique [0, 0, 0.55, 0, 0] -- Result is 0.55
```

```fsharp
findUniq([ 1; 1; 1; 2; 1; 1 ]) = 2
findUniq([ 0; 0; 0.55; 0; 0 ]) = 0.55
```

```c
finduniq((const float[]){1, 1, 1, 2, 1, 1}, 5); /* --> 2 */
finduniq((const float[]){0, 0, 0.55, 0, 0}, 5); /* --> 0.55 */
```
```nasm
nums:  dd  1., 1., 1., 2., 1., 1.

mov rdi, nums
mov rsi, 6
call finduniq       ; XMM0 <- 2


nums:   dd  0., 0., 0.55, 0., 0.

mov rdi, nums
mov rsi, 6
call finduniq       ; XMM0 <- 0.55
```
```cpp
find_uniq(std::vector<float>{1, 1, 1, 2, 1, 1});  // --> 2
find_uniq(std::vector<float>{0, 0, 0.55, 0, 0});  // --> 0.55
```

```rust
find_uniq(&[1.0, 1.0, 1.0, 2.0, 1.0, 1.0]) // => 2.0
find_uniq(&[0.0, 0.0, 0.55, 0.0, 0.0]) // => 0.55
```

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

1. Find the unique number (this kata)
2. [Find the unique string](https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3)
3. [Find The Unique](https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5)


---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)
- **Auteur** : [isqua](https://www.codewars.com/users/isqua)
- **Approuvé par** : [user8476848](https://www.codewars.com/users/user8476848)

---

## 📈 Statistiques
- **Total de tentatives** : 664712
- **Total de solutions validées** : 147254
- **Nombre d'étoiles** : ⭐ 2827
- **Score des votes** : 👍 8787
- **Suggestions non résolues** : 7
- **Problèmes non résolus** : 4

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (14 janvier 2025). Elles peuvent évoluer avec le temps.
