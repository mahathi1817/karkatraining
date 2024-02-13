def duplicate_zeros(arr):
    length = len(arr)
    i = 0

    while i < length:
        if arr[i] == 0:
            for j in range(length - 1, i, -1):
                arr[j] = arr[j - 1]

            i += 1

        i += 1

arr = [1, 0, 2, 3, 0, 4, 5, 0]
print("Original array:", arr)

duplicate_zeros(arr)

print("Modified array:", arr)
