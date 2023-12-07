def splitevenodd(A):
    evenlist=[]
    oddlist=[]
    for i in A:
        if (i%2==0):
            evenlist.append(i)
        else:
            oddlist.append(i)
print("Even lists:",evenlist)
print("Odd lists:",oddlist)