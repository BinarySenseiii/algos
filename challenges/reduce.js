// Reduce Challenge - Merge and Sum Object Properties.
/*
you have two or more lists of objects that represent people with different stats, like goals and points. Each person has a name and some numbers associated with them. Your job is to combine these lists into one, adding up the numbers for each person who appears in more than one list. The result should be a single list where each person appears only once, with all their stats combined

For example, if two lists both include stats for "Jim Bob," you need to add up Jim Bob's stats from both lists and put the total in the final list. This helps you see the complete stats for each person without duplicates.
*/

const arr1 = [
  {name: 'Joe Brown', goals: 0, assists: 0, points: 0},
  {name: 'Jim Bob', goals: 2, assists: 1, points: 3},
  {name: 'Harry Styles', goals: 1, assists: 1, points: 2},
  {name: 'Craig Mack', goals: 5, assists: 7, points: 12},
  {name: 'Wés BÔS 🔥', goals: 5, assists: 7, points: 12},
  {name: 'DOG', bones: 100000, goals: 5, assists: 7, points: 12},
]

const arr2 = [
  {name: 'Craig Mack', goals: 3, assists: 3, points: 6, ppg: 0, ppa: 0, pims: 0},
  {name: 'Jim Bob', goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0},
  {name: 'Joe Brown', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0},
  {name: 'Harry Styles', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0},
]

const addItUp = (...arrays) =>
  arrays.flat().reduce((data, {name, ...points}) => {
    if (!data[name]) data[name] = {}
    for (const [key, value] of Object.entries(points)) {
      data[name][key] = (data[name][key] || 0) + value
    }
    return data
  }, {})

const result = addItUp(arr1, arr2)
console.log(result)
