# Interface Segregation Principle

```

"No client should be forced to depend on interfaces they do not use." -Robert C. Martin

In layman's terms, don't add additional functionality to an existing interface by adding new methods. Instead, create a new interface.

```

Ce que c'est... 

    1. Les entités devraient être ouvertes pour l’extension, mais fermées pour la modification.
    2. Comportement du code peut être extended.
    3. On devrait etre capable dajouter de nouvelles features a lentite du logiciel.
    4. Lentite a deja ete developper et tester, donc je devrait pas etre touchee. 


Conséquences du non respect :

    1. Difficile de maintenir le code 
    2. Difficile de modifier le code sans introduire des bugs
    3. Incoherence dans les classes (methodes sans implementation)

But du ISP :

```

"This principle is all about reducing the side effects and frequency of required changes by splitting large, 
 complex interfaces into smaller, more specific ones. If an interface is broken down into specific sets of 
 methods, it will allow the client to only know about the methods that are of interest to them."

```