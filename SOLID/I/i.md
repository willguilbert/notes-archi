# Interface Segregation Principle

```

"No client should be forced to depend on interfaces they do not use." -Robert C. Martin

In layman's terms, don't add additional functionality to an existing interface by adding new methods. Instead, create a new interface.

```

Ce que c'est... 

    1. Un client ne devraient pas dépendre d’interface qu’il n’utilise pas.


Conséquences du non respect :

    1. Implementations vides
    2. Dependance a plusieurs interfaces inutiles

But du ISP :

```

"This principle is all about reducing the side effects and frequency of required changes by splitting large, 
 complex interfaces into smaller, more specific ones. If an interface is broken down into specific sets of 
 methods, it will allow the client to only know about the methods that are of interest to them."

```