from fetch_data import requestData
from response import *

def main():
    data = requestData()
    country_data = parse(data)

    sorted_country_data = sorted(country_data, key=lambda x: x['temperature'])

    print(sorted_country_data)

main()