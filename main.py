from fetch_data import requestData
from response import *

def main():
    data = requestData()
    parse(data)

main()