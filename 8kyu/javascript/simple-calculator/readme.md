# simple calculator 

## 🏅 Rank
**8 kyu** (white)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Fundamentals

---

## 💻 Langages Disponibles
- javascript
- php
- csharp
- python

---

## 📜 Description du Kata

You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:<br>
The first and second argument should be numbers.<br>
The third argument should represent a sign indicating the operation to perform on these two numbers.
```if-not:csharp
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
```
```if:csharp
If the sign is not a valid sign, throw an ArgumentException.
```

# Example:

```javascript
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
```
```php
calculator(1, 2, "+"); // 3
calculator(1, 2, "&"); // "unknown value"
calculator(1, "k", "*"); // "unknown value"
```
```csharp
Kata.Calculator(1, 2, '+') => 3
Kata.Calculator(1, 2, '$') // throws ArgumentException
```
```python
calculator(1, 2, '+') => 3
calculator(1, 2, '$') # result will be "unknown value"
```

Good luck!

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/5810085c533d69f4980001cf)
- **Auteur** : [sanae](https://www.codewars.com/users/sanae)
- **Approuvé par** : [user8476848](https://www.codewars.com/users/user8476848)

---

## 📈 Statistiques
- **Total de tentatives** : 72526
- **Total de solutions validées** : 14318
- **Nombre d'étoiles** : ⭐ 173
- **Score des votes** : 👍 1818
- **Suggestions non résolues** : 3
- **Problèmes non résolus** : 2

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (14 janvier 2025). Elles peuvent évoluer avec le temps.
