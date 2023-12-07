int(input("Enter your age:"))
if age<=16:
    print("You cant drive.")
else:
    print("You can drive but cant vote.")
if age>18 or 24:
    print("You can vote but not rent a car")
else:
    print("You can do pretty much anything.")