import json
import mysql.connector

file_path = 'task5.json'
with open(file_path, 'r') as file:
    data = json.load(file)

new_employees = [
    {
        "id": 5,
        "name": "Eva Green",
        "age": 25,
        "position": "Marketing Coordinator",
        "salary": 60000.00
    },
    {
        "id": 6,
        "name": "Emma",
        "age": 30,
        "position": "FSW Developer",
        "salary": 70000.00
    }
]

data['employees'].extend(new_employees)

with open(file_path, 'w') as file:
    json.dump(data, file, indent=2)

db_connection = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="ronnieinsql",
    database="karka"
)

cursor = db_connection.cursor()

for employee in new_employees:
    sql_query = f"INSERT INTO employees (id, name, age, position, salary) VALUES ({employee['id']}, '{employee['name']}', {employee['age']}, '{employee['position']}', {employee['salary']})"
    cursor.execute(sql_query)

db_connection.commit()

cursor.close()
db_connection.close()

print("Employee data inserted into MySQL database.")



# import json

# file_path = 'task5.json'

# with open(file_path, 'r') as file:
#     data = json.load(file) 

# new_employees = [
#     {
#         "id": 5,
#         "name": "Eva Green",
#         "age": 25,
#         "position": "Marketing Coordinator",
#         "salary": 60000.00
#     },
#     {
#         "id": 6,
#         "name": "Emma",
#         "age": 30,
#         "position": "FSW Developer",
#         "salary": 70000.00
#     }
# ]

# data['employees'].extend(new_employees)

# with open(file_path, 'w') as file:
#     json.dump(data, file, indent=2)    

# with open(file_path, 'r') as file:
#     updated_data = json.load(file)

# employees = updated_data['employees']

# print("Updated Employee List:")
# for employee in employees:
#     print(f"ID: {employee['id']}")
#     print(f"Name: {employee['name']}")
#     print(f"Age: {employee['age']}")
#     print(f"Position: {employee['position']}")
#     print(f"Salary: ${employee['salary']:.2f}")
#     print("\n")
