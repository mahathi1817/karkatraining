def sumproduct(num1,num2):
    product=num1*num2
    if product > 500:
        return num1+num2
    else:
        return product

number1=int(input("Enter the first integer:"))
number2=int(input("Enter the second integer:"))

result=sumproduct(number1,number2)
print(result)