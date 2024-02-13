def calculate_electricity_bill(consumer_data):
    consumer_name = consumer_data['name']
    metre_readings = consumer_data['metre_readings']

    bill_details = {'name': 'consumer_name', 'bill_per_month': {}, 'total_bill': 0}

    for i in range(1, len(metre_readings)):
        units_consumed = metre_readings[i] - metre_readings[i - 1]

        if units_consumed <= 100:
            bill_amount = 0
        elif 100 < units_consumed <= 200:
            bill_amount = (units_consumed - 100) * 2
        elif 200 < units_consumed <= 500:
            bill_amount = 100 * 2 + (units_consumed - 200) * 5
        elif 500 < units_consumed <= 1000:
            bill_amount = 100 * 2 + 300 * 5 + (units_consumed - 500) * 10
        else:
            bill_amount = 100 * 2 + 300 * 5 + 500 * 10 + (units_consumed - 1000) * 14

        bill_details['bill_per_month'][f'Month-{i}'] = bill_amount

        bill_details['total_bill'] += bill_amount

    return bill_details

consumer_data = {'name': 'John Doe', 'metre_readings': [100, 200, 450, 800, 1200]}

result = calculate_electricity_bill(consumer_data)

print(result)
