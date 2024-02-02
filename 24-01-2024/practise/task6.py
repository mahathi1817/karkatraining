import pandas as pd
import json

xlfilepath = r'C:\Users\Administrator\Downloads\sheet1.xlsx'

df = pd.read_excel(xlfilepath)
    
data_dict = df.to_dict(orient='records')
    
print(data_dict)
