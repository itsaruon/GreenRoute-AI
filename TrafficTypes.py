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


