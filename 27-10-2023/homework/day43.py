num_list=[]
for i in range(5):
    num=int(input("Enter an integer:"))
    if num:
        num_list.append(num)
print([item for item in num_list if item%5==0])