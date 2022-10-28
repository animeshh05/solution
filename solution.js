//1.Write a Program to find area of a circle using Function, take input from the user
function CalArea(Radius) {
  Area = Radius * Radius * 3.14;
  console.log("Area is : " + Area);
}
CalArea(5);



//2.Write a Program to find factorial, take input from the user
function fact(nbr)
{
  if (nbr === 0)
  {
     return 1;
  }
  return nbr * fact(nbr-1);
}
console.log("Factorial of a number is:" + fact(3));
