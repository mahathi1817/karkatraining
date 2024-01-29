import mysql.connector
import json

conn=mysql.connector.connect(
    host='127.0.0.1',
    user='root',
    password='ronnieinsql',
    database='karka',
    autocommit=True
)
cursor=conn.cursor(dictionary=True)
query='show tables from karka'
cursor.execute(query)
results=cursor.fetchall()
Tables=input("List All Tables ? Y or N : " ).upper()
if Tables=='Y':
  print(results)
else:
  print('ok')

Choose=input('Select a table ? students or Staffs : ' ).lower()
if Choose=='students':
    students='select * from students'
    cursor.execute(students)
    stu=cursor.fetchall()
    print(stu)

    option=input("choose one select or update or add or remove : ").lower()
    if option=='select':
        select=input('Choose one, name or place : ').lower()
        selectid=int(input('Which id ? : '))
        if select=='name': 
            nameselect="select name from students where id=%s"
            cursor.execute(nameselect,(selectid,))
            name=cursor.fetchall()
            print(name)
        elif select=='place': 
            placeselect="select place from students where id=%s"
            cursor.execute(placeselect,(selectid,))
            place=cursor.fetchall()
            print(place)
        else:
            print('Choose one, name or place ? ')
    elif option=='update'  :
        select=input('Update name or place : ').lower() 
        selectid=int(input('Which id ? : '))
        update=input('Update here : ')
        if select=='name':
            selectupdate='update students set name=%s where id=%s'
            cursor.execute(selectupdate,(update,selectid))
            updatedname=cursor.fetchall()
            print(updatedname)
        elif select=='place':
            selectupdate='update students set place=%s where id=%s'
            cursor.execute(selectupdate,(update,selectid))
            updatedplace=cursor.fetchall()
            print(updatedplace)
    elif option=='add':
        name=input('name : ')
        place=input('place : ')
        gender=input('gender(M or F) : ')
        if name and gender.isalpha() :
            addrow='insert into students(name,place,gender) value (%s,%s,%s)'
            cursor.execute(addrow,(name,place,gender))
            updateadd=cursor.fetchall()
            print(updateadd)
    elif option=='remove':
        # select=input('Remove name or place : ')
        selectid=int(input('Choose an id for removing ? : '))
        remove='delete from students where id=%s'
        cursor.execute(remove,(selectid,))
        selectremove=cursor.fetchall()
        print(selectremove)


    
elif Choose=='staffs':
    staff='select * from Staffs'
    cursor.execute(staff)
    sta=cursor.fetchall()
    # print(sta)
    staffAns=[{
        'name':x['name'],
        'place':x['place'],
        'gender':x['gender'],
        'mobile_num':x['mobile_num'],
        'course':x['course'],
        # 'joined_date':x['joined_date']
    }for x in sta]
    print(type(staffAns))
    staffNew=json.dumps(staffAns,indent=4)
    print(staffNew)
else:
    print('Select a Table')

cursor.close()
    