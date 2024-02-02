evencount = 0
oddcount = 0

for number in range(1, 10):
    if number % 2 == 0:
        evencount += 1
    else:
        oddcount += 1

print(f"evennumber: {evencount}")
print(f"oddnumber: {oddcount}")
