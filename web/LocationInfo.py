# implement LocationInfo class 
# remove 'pass' keyword and replace with code
class LocationInfo:
    def __init__(self, description = 'None', funFact = 'None'):
        self.description = description
        self.funFact = funFact

 # TODO implement setters, getters, and checkers for description and funFact
    def getdescription(self):
        return self.description

    def getfunfact(self):
        return self.funFact

    def setfunfact(self, new_funFact):
        self.funFact = new_funFact

    def setdescription(self, value):
        self.description = value

    def checkfact(self):
        if (self.funFact == 'None'):
            return False
        else:
            return True
     
    def checkdescription(self):
        if (self.description == 'None'):
            return False
        else:
            return True


 # TODO implement setters, getters, and checkers for description and funFact
    # setters should update respective variable, 
    # getters return respective variables as a string, 
    # checkers are booleans and should return true if there is a value 

    # TODO implement the function __str__ to output description and funFact as strings seperated by a newline
    def __str__(self):
        print(self.description + '\n')
        print(self.funFact)
        pass

Houston = LocationInfo("harris_county")
Houston.getdescription()
Houston.getfunfact()
Houston.setdescription("Ford Bend county")
Houston.getdescription()
Houston.getfunfact()
Houston.__str__()





