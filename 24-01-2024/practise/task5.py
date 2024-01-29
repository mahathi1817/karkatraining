import json
file_path = 'task5.json'

with open(file_path, 'r') as file:    #r represents read mode
    data = json.load(file) 

new_employee = {
    "id": 5,
    "name": "Eva Green",
    "age": 25,
    "position": "Marketing Coordinator",
    "salary": 60000.00
}

data['employees'].append(new_employee)
with open(file_path, 'w') as file:
    json.dump(data, file, indent=2)    


employees = data['employees']

for employee in employees:
    print(f"ID: {employee['id']}")
    print(f"Name: {employee['name']}")
    print(f"Age: {employee['age']}")
    print(f"Position: {employee['position']}")
    print(f"Salary: ${employee['salary']:.2f}")
    print("\n")

