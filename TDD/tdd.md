# TDD

---

**Le TDD est une discipline qui consiste à ==écrire les tests avant le code de production== à l’aide d’un cycle court alternant entre les tests, le code et du réusinage. Chaque itération est accomplie en formulant un sous-problème à résoudre sous forme d'un test avant d'écrire le code source correspondant, et où le code est continuellement remanié dans une volonté de simplification.** 

 - Assure que les besoins du client sont comble (comportemnt)
 - Code coverage (every line of code is tested)

---

## 3 phases du TDD
 - **Loi N.1** : *Coder un test qui échoue avant d’écrire le code de production correspondant.*
 - **Loi N.2** : *Coder une seule assertion à la fois, qui fait échouer le test ou qui échoue à la compilation.*
 - **Loi N.3** : *Coder le minimum de code de production pour que l'assertion du test actuellement en échec soit satisfaite.*

 ---

## 5 grandes etapes

 1. Ecrire un seul test qui décrit une partie du problème à résoudre 
 2. Vérifier que le test échoue, autrement dit qu'il est valide, c'est-à-dire que le code se rapportant à ce test n'existe pas 
 3. Ecrire juste assez de code pour que le test réussisse 
 4. Vérifier que le test passe, ainsi que les autres tests existants 
 5. Remanier le code, c'est-à-dire l'améliorer sans en altérer le comportement, qu'il s'agisse du code de production ou du code de test.