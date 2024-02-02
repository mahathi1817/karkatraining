def productsum(num1, num2):
    product = num1 * num2

    if product > 500:
        return num1 + num2
    else:
        return product

number1 = int(input("Enter the first number: "))
number2 = int(input("Enter the second number: "))

result = productsum(number1, number2)
print("Result:", result)
