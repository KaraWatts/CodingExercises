# Instructions

You're the teacher of a class with 5 students (student 0, student 1, student 2, student 3, and student 4), and you want to play a game of hot potato. Initially give the potato to student 2 and after each turn, the student will give it to the student on their right, so student 0 will give to student 1, student 1 will give to student 2, ..., student 4 will give to student 0. 

Write a method taking in the number of turns and return an integer representing the student the potato lands on, without using loops.

**Example**

```js
potato(0) => 2
potato(1) => 3
potato(7) => 4
```