## Exemple "manuel"

Insertion Sort

**** INDEX = 1 ****

On va initialiser notre index à 1 pour cibler le second élément du tableau

index: 1

état courrant: [9, 3, 6, 2, 1, 11]

L'élément courrant: 3

On va le comparer à TOUS LES ELEMENTS qui le précède

Liste d'élément à comparer: [9]

Est ce que 3 est plus petit que 9 ?

Oui => On échange 

état courrant: [3, 9, 6, 2, 1, 11]

Il n'y a plus d'éléments à comparer

STOP

état courrant: [3, 9, 6, 2, 1, 11]

**** INDEX = 2 ****

On va déplacer notre index de 1 vers la droite

index: 2

état courrant: [3, 9, 6, 2, 1, 11]

L'élément courrant: 6

On va le comparer à TOUS LES ELEMENTS qui le précède

Liste d'élément à comparer: [6, 9]

Est ce que 6 est plus petit que 9

Oui => On échange

état courrant: [3, 6, 9, 2, 1, 11]

Est ce que 6 est plus petit que 3 ?

Non => comme le reste du tableau est déjà trié et que l'élément courrant est plus grand que l'élément à comparer alors on peut s'arrêter là

STOP

état courrant: [3, 6, 9, 2, 1, 11]

**** INDEX = 3 ****

On va déplacer notre index de 1 vers la droite

index: 3

état courrant: [3, 6, 9, 2, 1, 11]

L'élément courrant: 2

On va le comparer à TOUS LES ELEMENTS qui le précède

Liste d'élément à comparer: [3, 6, 9]

Est ce que 2 est plus petit que 9 ?

Oui => On échange (SWAP)

état courrant: [3, 6, 2, 9, 1, 11]

Est ce que 2 est plus petit que 6 ?

Oui => On échange (SWAP)

état courrant: [3, 2, 6, 9, 1, 11]

Est ce que 2 est plus petit que 3 ?

Oui => On échange (SWAP)

état courrant: [2, 3, 6, 9, 1, 11]

...

## PSEUDO CODE


### Première boucle

name: loop1

nom de l'index courrant dans cette boucle: i

[9, 3, 6, 2, 1, 11] itère de 3 à 11

loop set up:

- step name: i (let i)
- interator: current array state
- from step: 1 (i = 1)
- to step: 5 (i < arr.length)
- step: +1 (i++)

Description: 

On va itérer le tableau depuis le second juqu'au dernier

Pour chaque item, on va lancer la seconde boucle.

### Deuxième boucle

name: loop2

nom de l'index courrant dans cette boucle: j

Dans cette seconde boucle on a stocker la valeur courrante de la boucle 1 (loop1).

current = arr[i] (on utilise l'index courrant de la boucle supérieur loop1)

loop set up:

- step name: j (let j)
- interator: current array state
- from step: i (j = i)
- to step: 0 (j >= 0)
- step: -1 (i--)

Description: 

On va itérer le tableau depuis l'index courrant de la boucle supérieur (i) puis on va parcourir de tableau jusqu'au premier élément de celui ci.

L'objectif est de vérifier si l'élement courrant est plus petit que l'élément qui le précede: 

Condition: arr[j] < arr[j - 1]

Oui: Swipe arr[j] et arr[j - 1] => continue loop
Non: break (stop le process et on passe à la prochaine valeur dans la loop1)

## Time complexity

Le tri par insertion consiste à parcourir chaque élément du tableau et à le placer à sa position correcte dans la séquence triée. Pour chaque élément, l'algorithme peut avoir besoin de le comparer et de le déplacer à travers la séquence triée jusqu'à sa position correcte.

Supposons un tableau de taille `n`. Dans le pire des cas, chaque élément pourrait nécessiter de se déplacer tout le chemin vers le début du tableau, ce qui nécessiterait environ O(n) opérations. Étant donné que nous avons `n` éléments dans le tableau, la complexité totale serait d'environ O(n^2), car ces opérations sont effectuées pour chaque élément.

En résumé, la complexité temporelle du tri par insertion est quadratique (O(n^2)), ce qui signifie que le temps d'exécution augmente quadratiquement avec la taille du tableau.



















