# class Student:
#     def __init__(self, name, place):
#         self.name = name
#         self.place = place

#     def to_dict(self):
#         return {'name': self.name, 'place': self.place}

# import mysql.connector
# conn = mysql.connector.connect(
#     host="127.0.0.1",
#     user="root",
#     password="ronnieinsql",
#     database="karka"
# )

# cursor = conn.cursor()
# query = "select name, place from students limit 3"
# cursor.execute(query)
# results = cursor.fetchall()
# print(results)

# student_objects = [Student(name, place) for name, place in results]

# for student in student_objects:
#     student_dict = student.to_dict()
#     print(f"Student: {student_dict}")
#     print(type(student_dict))

import datetime

x = datetime.datetime.now()
print(x)
