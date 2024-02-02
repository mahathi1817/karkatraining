def agebased(age):
    if age < 16:
        print("You cant vote")
    elif 16 <= age <= 17:
        print("You can drive but not vote")
    elif 18 <= age <= 24:
        print("You can vote but not rent a car")
    else:
        print("You can pretty much do anything")

result=int(input("Enter your age:"))
agebased(result)