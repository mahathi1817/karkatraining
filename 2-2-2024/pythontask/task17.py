myresume={
    "Name":"Ronnie",
    "Email":"ron@gmail.com",
    "Mobile_num":1234567890,
    "Skills":["Python" , "SQL" , "React"],
    "Education_qualificatons":{
        "tenth":{"Year":2020 , "School":"Excel Central School"},
        "twelfth":{"Year":2023 , "School":"XYZ School"}
    },
    "Hobbies": ["Reading", "Hiking", "Photography"],
    "Personal_Details": {
        "Father's name": "Doe Sr.",
        "Father's occupation": "Engineer",
        "Languages Known": ["English", "Malayalam","Tamil"],
        "DOB": "2006-01-26",
        "Gender": "Female",
        "Marital Status": "Single",
        "Address": {"Street": "123 Main St", "City": "Anytown", "State": "CA", "ZIP": "12345"},
},
}
print("Name:", myresume["Name"])
print("Email:", myresume["Email"])
print("Mobile_num:", myresume["Mobile_num"])
print("Skills:", myresume["Skills"])
print("Hobbies:",myresume["Hobbies"])
print("Personal_Details:",myresume["Personal_Details"])

print("10th Grade - Year:", myresume["Education_qualificatons"]["tenth"]["Year"])
print("10th Grade - School:", myresume["Education_qualificatons"]["tenth"]["School"])

print("12th Grade - Year:", myresume["Education_qualificatons"]["twelfth"]["Year"])
print("12th Grade - School:", myresume["Education_qualificatons"]["twelfth"]["School"])
