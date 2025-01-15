# Dependency Inversion Principle

```

"High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions."

 - Robert C. Martin

```

Ce que c'est... 

    1. Les interactions entre un module de haut niveau et un module de bas niveau doivent se faire part des abstractions
    2. Abstractions  : Interfaces, abstract Classes 
    3. Les abstractions ne doivent pas connaitre les implementations. Cest le devoir des modules bas niveau dadherer aux au contrats des abstractions


Conséquences du non respect :

    1. Dependances vers des modules plus bas
    2. Les couts de changements des low level modules sont grands

But du DIP :

```

"This principle is primarily concerned with reducing dependencies among the code modules, which leads to more decoupled and easily maintainable systems."

```