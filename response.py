import json

def parse(data):
    for jsonObj in data:
        try:
            if 'error' in jsonObj.keys():
                raise RuntimeError
            print(getTempC(jsonObj))
        except:
            print("**********************************Country not found")

def getTempC(jsonObj):
    return "Country: {}, City: {}, Temp: {}".format(jsonObj['location']['country'], jsonObj['location']['name'], jsonObj['current']['temp_c'])

def toJsonObject(data):
    return json.loads(data)