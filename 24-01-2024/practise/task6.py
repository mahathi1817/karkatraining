import mysql.connector
import json

conn = mysql.connector.connect(
    host='127.0.0.1',
    user='root',
    password='ronnieinsql',
    database='karka'
)
cursor = conn.cursor()

def insert_data(json_data):
    query = "INSERT INTO students (name, place, ...) VALUES (%s, %s, ...)"
    values = (json_data['name'], json_data['place'], ...) 
    cursor.execute(query, values)
    conn.commit()

sample_json = {
    'name': 'Felix',
    'place': 'bangalore',
}

insert_data(sample_json)

cursor.close()
conn.close()
