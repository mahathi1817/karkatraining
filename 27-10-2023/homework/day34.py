number=12345
count=0
while number!=0:
    number//=10
    count+=1
print("Number of digits:"+str(count))