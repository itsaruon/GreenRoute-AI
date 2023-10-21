#Setting up The Origin and Destination   

def driveAtoB(start,end,world):
    map = world.getmap()
    startingWaypoint = map.get_waypoint(start)
    endingwaypoint= map.get_waypoint(end)
    route = world.getmap().get_waypoint_route(start,end)
    
    if route:
        car_Bp = world.get_blueprint_library().filter('vehicle.*')[0]
        spawn_point = carla.Transform(start.transform.location, startingWaypoint.transform.rotation)
        vehicle = world.spawn_actor(car_Bp, spawn_point)
        for waypoint in route:
            vehicle.set_transform(waypoint.transform)

        
        vehicle.destroy()  #Terminate upon arrival
    else:
        print("Invalid Route! ")