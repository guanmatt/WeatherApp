import json

def parse(data):
    jsonObj = toJsonObject(data)
    try:
        if 'error' in jsonObj:
            raise RuntimeError
        print(getTempC(data))
    except:
        print("**********************************Country not found")

def getTempC(data):
    jsonObj = toJsonObject(data)
    return "Country: {}, City: {}, Temp: {}C".format(jsonObj['location']['country'], jsonObj['location']['name'], jsonObj['current']['temp_c'])

def toJsonObject(data):
    return json.loads(data)