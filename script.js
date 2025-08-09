const tasks = [
  "Найти сумму элементов массива.",
  "Определить, является ли число простым.",
  "Реализовать алгоритм быстрой сортировки.",
  "Посчитать количество слов в строке.",
  "Найти максимальное значение в бинарном дереве."
];

document.getElementById('generateTask').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  const task = tasks[randomIndex];
  document.getElementById('taskContainer').textContent = task;
});
