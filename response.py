import json

def getTempC(data):
    data = json.loads(data)
    return data['current']['temp_c']

def toJsonObject(data):
    return json.loads(data)