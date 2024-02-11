## Selection Sort

La complexité temporelle (time complexity) de l'algorithme de tri par sélection (selection sort) est de O(n^2), où n est la taille du tableau d'entrée.

Explication :

La boucle externe, qui itère sur chaque élément du tableau, s'exécute en O(n) où n est la taille du tableau.

À chaque itération de la boucle externe, la fonction reduce est utilisée pour trouver le minimum dans la partie non triée du tableau. La fonction reduce a elle-même une complexité de O(n), car elle doit comparer chaque élément de la partie non triée.

En outre, l'opération de recherche de l'index du minimum dans la partie non triée (unsorted.indexOf(min)) a également une complexité de O(n).

Donc, à chaque itération de la boucle externe, vous avez deux opérations imbriquées qui ont une complexité linéaire par rapport à la taille de la partie non triée. Cela donne une complexité totale de `O(n) * O(n) = O(n^2)`.

En résumé, l'algorithme de tri par sélection a une complexité quadratique et peut ne pas être optimal pour des ensembles de données de grande taille. Si la performance est une préoccupation, d'autres algorithmes de tri tels que le tri rapide (quicksort) ou le tri fusion (merge sort) pourraient être plus efficaces sur de grandes quantités de données.
