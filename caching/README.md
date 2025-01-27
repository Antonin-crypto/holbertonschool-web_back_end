# Caching System Implementations

Ce projet contient différentes implémentations d'un système de cache avec des algorithmes classiques de gestion de cache. Ces implémentations sont basées sur la classe de base `BaseCaching`, et chaque algorithme gère les éléments du cache selon des règles spécifiques.

## Algorithmes de Cache

### 1. **BasicCache**

Implémente un cache sans limite de taille. Tous les éléments sont ajoutés à `cache_data` sans restriction. Si une clé ou un élément est `None`, l'élément n'est pas ajouté.

- **Méthodes :**
  - `put(key, item)` : Ajoute un élément au cache.
  - `get(key)` : Récupère un élément à partir de sa clé.

### 2. **FIFOCache (First In, First Out)**

Implémente le cache avec l'algorithme FIFO. Lorsqu'il y a trop d'éléments dans le cache (dépassement de la limite de `BaseCaching.MAX_ITEMS`), le premier élément ajouté est supprimé.

- **Méthodes :**
  - `put(key, item)` : Ajoute un élément au cache.
  - `get(key)` : Récupère un élément à partir de sa clé.

**Lorsque le cache dépasse la capacité maximale :**

- L'élément ajouté en premier est supprimé.
- La suppression est affichée : `DISCARD: key`.

### 3. **LIFOCache (Last In, First Out)**

Implémente le cache avec l'algorithme LIFO. Lorsqu'il y a trop d'éléments dans le cache, l'élément le plus récemment ajouté est supprimé.

- **Méthodes :**
  - `put(key, item)` : Ajoute un élément au cache.
  - `get(key)` : Récupère un élément à partir de sa clé.

**Lorsque le cache dépasse la capacité maximale :**

- L'élément ajouté en dernier est supprimé.
- La suppression est affichée : `DISCARD: key`.

### 4. **LRUCache (Least Recently Used)**

Implémente le cache avec l'algorithme LRU. Lorsque le cache atteint la limite maximale, l'élément le moins récemment utilisé est supprimé.

- **Méthodes :**
  - `put(key, item)` : Ajoute un élément au cache.
  - `get(key)` : Récupère un élément à partir de sa clé.

**Lorsque le cache dépasse la capacité maximale :**

- L'élément le moins récemment utilisé est supprimé.
- La suppression est affichée : `DISCARD: key`.

### 5. **MRUCache (Most Recently Used)**

Implémente le cache avec l'algorithme MRU. Lorsque le cache dépasse la capacité maximale, l'élément le plus récemment utilisé est supprimé.

- **Méthodes :**
  - `put(key, item)` : Ajoute un élément au cache.
  - `get(key)` : Récupère un élément à partir de sa clé.

**Lorsque le cache dépasse la capacité maximale :**

- L'élément le plus récemment utilisé est supprimé.
- La suppression est affichée : `DISCARD: key`.

## Installation

1. Clonez ce repository :
   ```bash
   git clone https://github.com/votre-utilisateur/caching-system.git
   ```
