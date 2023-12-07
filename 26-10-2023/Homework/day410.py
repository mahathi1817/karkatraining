def product_or_sum(a,b):
    if a*b>=500:
        return a*b
    else:
        return a+b
result=product_or_sum(5,20)
print(result)