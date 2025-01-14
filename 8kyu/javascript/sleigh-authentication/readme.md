# Sleigh Authentication

## 🏅 Rank
**8 kyu** (white)

## 🗂️ Catégorie
**reference**

## 🏷️ Tags
- Fundamentals

---

## 💻 Langages Disponibles
- javascript
- coffeescript
- ruby
- python
- haskell
- elixir
- csharp
- java

---

## 📜 Description du Kata

Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

Your task is to implement the `authenticate()` method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" *(yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D)*, the return value must be `true`. Otherwise it should return `false`.

Examples:

```javascript
var sleigh = new Sleigh();
sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
```
```python
sleigh = Sleigh()
sleigh.authenticate('Santa Claus', 'Ho Ho Ho!') # must return True

sleigh.authenticate('Santa', 'Ho Ho Ho!') # must return False
sleigh.authenticate('Santa Claus', 'Ho Ho!') # must return False
sleigh.authenticate('jhoffner', 'CodeWars') # Nope, even Jake is not allowed to use the sleigh ;)
```
```haskell
authenticate "Santa Claus" "Ho Ho Ho!" -- True
authenticate "Santa"       "Ho Ho Ho!" -- False
authenticate "Santa Claus" "Ho Ho!"    -- False
authenticate "jhoffner"    "CodeWars"  -- False
```
```elixir
authenticate? "Santa Claus", "Ho Ho Ho!" #=> true
authenticate? "Santa",       "Ho Ho Ho!" #=> false
authenticate? "Santa Claus", "Ho Ho!"    #=> false
authenticate? "jhoffner",    "CodeWars"  #=> false
```
```java
sleigh.authenticate("Santa Claus", "Ho Ho Ho!") # must return True
sleigh.authenticate("Santa', 'Ho Ho Ho!") # must return False
sleigh.authenticate("Santa Claus", "Ho Ho!") # must return False
sleigh.authenticate("jhoffner", "CodeWars") # Nope, even Jak
```


---

## 🔗 Liens
- [Voir le Kata sur Codewars](https://www.codewars.com/kata/52adc142b2651f25a8000643)
- **Auteur** : [BattleRattle](https://www.codewars.com/users/BattleRattle)
- **Approuvé par** : [jhoffner](https://www.codewars.com/users/jhoffner)

---

## 📈 Statistiques
- **Total de tentatives** : 35828
- **Total de solutions validées** : 22420
- **Nombre d'étoiles** : ⭐ 134
- **Score des votes** : 👍 1639
- **Suggestions non résolues** : 0
- **Problèmes non résolus** : 2

---

## ℹ️ Note Générale
Les informations contenues dans ce fichier (statistiques, tags, langages, etc.) sont celles disponibles au moment de la génération du README (14 janvier 2025). Elles peuvent évoluer avec le temps.
