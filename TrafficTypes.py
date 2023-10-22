#detecting traffic types


def numCars(world,location, radius = 100):
    #vehicle* --> gives all types of vehicles
    #actor --> objects in the simulation
    try:
        Cars = world.get_actors().filter('vehicle.*') #list of # of cars in the simulation
        return [car for car in Cars if car.get_location().distance(location) < radius] #extract vehicles within radius range
    except Exception as e:
        print("Could not fetch data. Error: {e}")
        return[]

def getSpeed(Cars):
    if len(Cars) == 0:
        return 0
    else:
        try:
            totalVelocity = sum(car.get_velocity().length() for car in Cars)
            return totalVelocity / (len(Cars))
        except Exception as e: #error calculating
            print("Could not get average velocity. error message: {e}")
            return 0
        
def traffic(world,location,radius = 100):
    closeVehicles = numCars(world, location, radius)
    averageVel = getSpeed(closeVehicles)

    if closeVehicles > 25 and averageVel < 15:
        return "heavy traffic"
    elif closeVehicles < 5 and averageVel > 18:
        return "light traffic"
    elif closeVehicles > 20 and averageVel < 3:
        return "blocked pathway, too much traffic"
    else:
        return "Good traffic conditions"
