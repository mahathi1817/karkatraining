def greatestnum(num1,num2,num3):
    maxnum = max(num1,num2,num3)
    print(f"The greatest number among {num1},{num2},{num3} is {maxnum}")

number1=int(input("Enter the first number:"))
number2=int(input("Enter the second number:"))
number3=int(input("Enter the third number:"))

greatestnum(number1,number2,number3)