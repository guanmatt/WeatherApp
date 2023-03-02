import json

def parse(data):
    country_data = []

    for jsonObj in data:
        try:
            if 'error' in jsonObj.keys():
                raise RuntimeError
            country_data.append(getTempC(jsonObj))
        except:
            print("**********************************Country not found")

    return country_data

def getTempC(jsonObj):
    return {
        "country": jsonObj['location']['country'],
        "city": jsonObj['location']['name'],
        "temperature": float(jsonObj['current']['temp_c'])
    }

# "Country: {}, City: {}, Temp: {}".format(jsonObj['location']['country'], jsonObj['location']['name'], jsonObj['current']['temp_c'])

def toJsonObject(data):
    return json.loads(data)