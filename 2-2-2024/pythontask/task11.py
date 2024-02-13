import re

def strongpassword(password):
    if len(password) < 8:
        return False

    if not re.search(r'[a-z]', password):
        return False

    if not re.search(r'[A-Z]', password):
        return False

    if not re.search(r'\d', password):
        return False

    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        return False

    return True

passwordinput = input("Enter your password: ")
if strongpassword(passwordinput):
    print("Password is strong!")
else:
    print("Password does not meet the criteria for strength.")
