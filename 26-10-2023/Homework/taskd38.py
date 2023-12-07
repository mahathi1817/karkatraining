def checkleap(Year):
    if((Year%400==0)or (Year%100!=0)and(Year%4==0)):
        print("Given year is a leap year")
    else:
        print("Given year is not a leap year")
        Year=int(input(2024))
checkleap(2024)
