# SpeedCode #2 - Array Madness

## 🏅 Rank
**8 kyu** (white)

## 🗂️ Catégorie
**games**

## 🏷️ Tags
- Arrays
- Puzzles

---

## 💻 Langages Disponibles
- javascript
- csharp
- python
- factor
- c

---

## 📜 Description du Kata

# SpeedCode #2 - Array Madness

## Objective

Given two **integer arrays** ```a, b```, both of ```length >= 1```, create a program that returns ```true``` if the **sum of the squares** of each element in ```a``` is **strictly greater than** the **sum of the cubes** of each element in ```b```.

E.g.
```c
array_madness(3, {4, 5, 6}, 3, {1, 2, 3}) == true;
// because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
```
```javascript
arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
```
```csharp
Kata.ArrayMadness(new int[] {4, 5, 6}, new int[] {1, 2, 3}) => true // because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
```
```python
array_madness([4, 5, 6], [1, 2, 3]) => True #because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
```
```factor
{ 4 5 6 } { 1 2 3 } array-madness ! returns t since 4 2 ^ 5 2 ^ + 6 2 ^ + is greater than 1 3 ^ 2 3 ^ + 3 3 ^ +
```
Get your timer out.  Are you ready?  Ready, get set, GO!!!

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1)
- **Auteur** : [donaldsebleung](https://www.codewars.com/users/donaldsebleung)
- **Approuvé par** : [smile67](https://www.codewars.com/users/smile67)

---

## 📈 Statistiques
- **Total de tentatives** : 55336
- **Total de solutions validées** : 16272
- **Nombre d'étoiles** : ⭐ 149
- **Score des votes** : 👍 2354
- **Suggestions non résolues** : 2
- **Problèmes non résolus** : 0

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (14 janvier 2025). Elles peuvent évoluer avec le temps.
