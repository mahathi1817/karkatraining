def removespaces(inputstr):
    resultstr = ""
    
    for char in inputstr:
        if char != ' ':
            resultstr += char
    
    return resultstr

inputstring = "Hello, World! This is a sample string."
outputstring = removespaces(inputstring)

print("Original String:", inputstring)
print("String without spaces:", outputstring)
