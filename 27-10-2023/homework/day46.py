x=int(input("Enter the first number:"))
y=int(input("Enter the second number:"))
z=int(input("Enter the third number:"))
a1=min(x,y,z)
a2=max(x,y,z)
a3=(x+y+z)-a1-a2
print("numbers in sorted order:",a1,a2,a3)
