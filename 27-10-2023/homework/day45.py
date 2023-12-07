even_number=[]
odd_number=[]
start=10
end=55
for number in range(start,end+1):
    if number//2==number/2:
        even_number.append(number)
    elif number//2!=number/2:
        odd_number.append(number)
print("Even numbers:",even_number)
print("/n")
print("0dd numbers:",odd_number)