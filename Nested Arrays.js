/* Name: Jamal karim
   Assignment# 02  */

let A = [
  1, 2,
  [3, 4,
    [5, 6, 7]
  ]
];

let B = [...A]

let C = [...A[2][2]]


let D = {
  a: {
    d: 3,
    e: {
      g: 5, h: 6, i: 7
    },
    f: 4
  },
  b: 1,
  c: 2
}

let E = D

let F = { ...D['a']['e'] }

console.log(F)

