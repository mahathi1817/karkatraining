input_list = [5, 10, 20, 2, 0, 33, 100, 90]
output_list = []

cumulative_sum = 0
for num in input_list:
    cumulative_sum += num
    output_list.extend([num, cumulative_sum])

print(output_list)
