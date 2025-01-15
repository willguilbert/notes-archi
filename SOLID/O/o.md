# Open/Closed Principle

```

"The Open-Closed Principle states that "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification." -- Robert C. Martin

```

Ce que c'est... 

    1. Les entités devraient être ouvertes pour l’extension, mais fermées pour la modification.
    2. Comportement du code peut être extended.
    3. On devrait etre capable dajouter de nouvelles features a lentite du logiciel.
    4. Lentite a deja ete developper et tester, donc je devrait pas etre touchee. 


Conséquences du non respect :

    1. Difficile de maintenir le code 
    2. Difficile de modifier le code sans introduire des bugs

But du OCP :

```

"The idea behind the OCP is that it promotes greater flexibility in your code. When you need to add new behavior or features,
instead of modifying existing code (and thus possibly introducing new bugs), you write new code that extends the old code."

```