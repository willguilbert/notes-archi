# Liskov Substitution Principle

```

"If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program." - Robert C. Martin

```

Ce que c'est... 

    1. Un enfant devrait être utilisé à la place de son parent sans comportement pas prévu.
    2. OCP + LSP violés
    3. Un programme qui utilise une classe de base doit pouvoir substituer les classes derives sans affecter la validite du programme


Conséquences du non respect :

    1. Grands couts de maintenance
    2. Code faiblement robuste
    3. On viole OCP et LSP
    

But du LSP :

```

"Derived classes must be substitutable for their base classes. That is, a program that uses a base class must be able to substitute a subclass without affecting the correctness of the program."

```
