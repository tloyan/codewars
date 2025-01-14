# Contamination #1 -String-

## 🏅 Rank
**8 kyu** (white)

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
- crystal
- csharp
- haskell
- go
- rust
- d
- riscv
- coffeescript
- scala

---

## 📜 Description du Kata

An AI has infected a text with a character!! 

This text is now **fully mutated** to this character.

Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

~~~if-not:riscv
If the text or the character are empty, return an empty string.  
There will never be a case when both are empty as nothing is going on!!

**Note:** The character is a string of length 1 or an empty string.
~~~

~~~if:riscv
If the text is empty, return an empty string.
~~~

# Example

```
text before = "abc"
character   = "z"
text after  = "zzz"
```

~~~if:riscv
RISC-V: The function signature is

```c
void contamination(const char *text, char mutation, char *result);
```

The function does not have a return value - you should write the mutated string into `result`. You may safely assume that `result` will be large enough to hold the result.
~~~

---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/596fba44963025c878000039)
- **Auteur** : [John Brekker](https://www.codewars.com/users/John%20Brekker)
- **Approuvé par** : [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

---

## 📈 Statistiques
- **Total de tentatives** : 34157
- **Total de solutions validées** : 18531
- **Nombre d'étoiles** : ⭐ 129
- **Score des votes** : 👍 1859
- **Suggestions non résolues** : 4
- **Problèmes non résolus** : 1

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (14 janvier 2025). Elles peuvent évoluer avec le temps.
