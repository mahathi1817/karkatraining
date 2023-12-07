def max(a,b,c):
    if a>=b:
        return(a)
    elif b>=c and a>=c:
        return(b)
    else:
        return(c)
a=2
b=4
c=8
print(max(a,b,c))