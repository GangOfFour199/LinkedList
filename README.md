# LinkedList

## ABOUT

> *An excercise on how to create a Linked List, initialising it as a class with Nodes classes incorporated in the list itself. The Linked List class contains a multitude of desired functions listed below.*

1. `clear()` empties all the nodes within the list and returns the value of the list as `null`
2. `append(value)` adds a new node containing value to the end of the list or to start if list is empty
3. `prepend(value)` adds a new node containing value to the start of the list
4. `size()` returns the total number of nodes in the list
5. `head()` returns the first node in the list
6. `tail()` returns the last node in the list
7. `at(index)` returns the node at the given index or error message if there is no node in the requested index
8. `pop()` removes the last element from the list
9. `contains(value)` returns true if the passed in value is in the list and otherwise returns false
10. `find(value)` returns the index of the node containing value, or null if not found
11. `toString()` returns your LinkedList objects as strings in the format: ( value ) -> ( value ) -> ( value ) -> null
12. `insertAt(value, index)` inserts a new node with the provided value at the given index or at the end of the list if index is bigger than list size
13. `removeAt(index)` removes the node at the given index or error message if the list is empty or if the request index is bigger than list size
