for i in range(1, 11):
    currnumber = i
    prenumber = i - 1 if i > 0 else 0
    total = currnumber + prenumber
    print(f"Current: {currnumber}, Previous: {prenumber}, Sum: {total}")
