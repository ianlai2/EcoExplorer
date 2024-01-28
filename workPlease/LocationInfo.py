# implement LocationInfo class 
# remove 'pass' keyword and replace with code
class LocationInfo:
    def __init__(self, description = 'None', funFact = 'None'):
        self.description = description
        self.funFact = funFact

 # getters return respective variables as a string,
    def getdescription(self):
        return self.description

    def getfunfact(self):
        return self.funFact
# setters should update respective variable, 
    def setfunfact(self, new_funFact):
        self.funFact = new_funFact

    def setdescription(self, value):
        self.description = value

 # checkers are booleans and should return true if there is a value 
    def checkfact(self):
        return self.funFact == 'None'
     
    def checkdescription(self):
        return self.description == 'None'

    def __str__(self):
        print(self.description + '\n')
        print(self.funFact)
        pass

# Houston = LocationInfo("harris_county")
# Houston.getdescription()
# Houston.getfunfact()
# Houston.setdescription("Ford Bend county")
# Houston.getdescription()
# Houston.getfunfact()
# Houston.__str__()





