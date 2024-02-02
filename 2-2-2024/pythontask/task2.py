def oddzero(arr):
    return [0 if num % 2 != 0 else num for num in arr]

inputarray = [5, 10, 15, 20, 22, 23]
outputarray = oddzero(inputarray)

print(inputarray)
print(outputarray)
