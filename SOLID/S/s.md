# Single Responsibility Principle

```

"A class should have only one reason to change." -- Robert C. Martin

```

Ce que c'est... 

    1. Un module devrait avoir qu’une seule raison de changer.
    2. Une classe devrait avoir une seule chose à faire, et bien le faire.
    2. Vise à augmenter la cohésion d’une classe.
    3. Non-respect peut diminuer la cohésion et augmenter le couplage.


Conséquences du non respect :

    1. Difficile de comprendre le code
    2. Difficile de maintenir le code 
    3. Difficile de modifier le code

But du SRP :

```

"The goal is to minimize the impact of change by isolating it. If we have to change something, we should only need to update one class. If a class has too many responsibilities, a change in the requirements of one responsibility might affect the other responsibilities of the class."

```