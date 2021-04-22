## Part 1a
1. values added:  20
2. final result:  20
3. values added:  20
4. ReferenceError: result is not defined. This is because variable result is declared inside the if statement; it will be accessible only inside the if block.
5. TypeError: Assignment to constant variable. This is because we attempt to change a constant after it is declared.
6. Since there is an error on line 9, nothing will be printed by line 13 as the program crashes before it reaches line 13.

## Part 1b
1. It will output 3 in console. Since i is defined using var, it is accessible outside the for loop block.
2. It will output 150 in console. Since discountedPrice is defined using var, it is accessible outside the for loop block.
3. It will output 150 in console. Since finalPrice is defined using var at function-level, it has not block scope.
4. It will return [50, 100, 150]. Since the input is [100, 200, 300] and discount is 50 percent, the output will be half of the original value.
5. It will output "ReferenceError: i is not defined". Since i is defined using let, it is not accessible outside the for loop block.
6. It will output "ReferenceError: discountedPrice is not defined". This is because discountedPrice is defined using let inside for loop; it will be accessible only insdie the for loop block.
7. It will output 150 in console. Since finalPrice is defined using let, it is accessible at function level.
8. It will return the same output [50, 100, 150]. Changing variable type from var to let only change block visibility; functionality of the program remains unchanged.
9. It will output "ReferenceError: i is not defined". Since i is defined using let, it is not accessible outside the for loop block.
10. It will output 3 in console. Since length is defined using const, it is accessible at function level.
11. It will return [50, 100, 150]. Since the input is [100, 200, 300] and discount is 50 percent, the output will be half of the original value.
12. A. student.name B. student["Grad Year"] C. student.greeting() D. student["Favorite Teacher"].name E. student.courseLoad[0]
13. A. Output: '32'<br/>Explannation: Integer maps to their eact string representation<br/>
    B. Output: 1<br/>Explannation: String maps to their exact integer representation<br/>
    C. Output: 3<br/>Explannation: null maps to 0 in integer representation<br/>
    D. Output: '3null'<br/>Explannation: null maps to its exact string representation<br/>
    E. Output: 4<br/>Explannation: true maps to 1 in integer representation<br/>
    F. Output: 0<br/>Explannation: false and null map to 0 in integer representation<br/>
    G. Output: '3undefined'<br/>Explannation: undefined maps to its exact string representation<br/>
    H. Output: NaN<br/>Explannation: undefined gets converted to NaN<br/>
14. A. Output: true<br/>Explannation: string '2' becomes a number 2<br/>
    B. Output: false<br/>Explannation: First character of string '2' is greater than that of string'12'<br/>
    C. Output: true<br/>Explannation: string '2' becomes a number 2; equality holds<br/>
    D. Output: false<br/>Explannation: strict equality; type Number does not match type String<br/>
    E. Output: false<br/>Explannation: true becomes a number 1<br/>
    F. Output: true<br/>Explannation: Number 2 gets concerted to boolean true<br/>
15. == operator checks for equality with potential type conversion; === operator checks for equality without type conversion.
17. After we call the function modifyArray, parameter array and callback has values [1, 2, 3] and function doSomething(). During the first iteration of for loop, array[i] has the value 1 and doSomething(array[i]) returns num * 2 which is 2. 2 will be pushed to newArray. Similiar procedures are carried out during the second and third iterations of for loop, and value 4 and 6 corresponding to the output of doSomething(array[2]) and doSomething(array[3]) will be pushed to newArr. Thus, the result returned newArr is [2, 4, 6].
19. 1<br/>
    4<br/>
    3<br/>
    2<br/>
