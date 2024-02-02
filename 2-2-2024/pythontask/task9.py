def duplicates(input_list):
    list1 = list(set(input_list))
    return list1

originallist = [1, 2, 2, 3, 4, 4, 5]
resultlist = duplicates(originallist)

print(resultlist)
