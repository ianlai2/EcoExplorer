/* Hello Wokwi! */
int val = 0; //value for storing moisture value 
int soilPin = A0;//Declare a variable for the soil moisture sensor 
int soilPower = 7;//Variable for Soil moisture Power
double moisture = 0;
double moistPercent = 0;
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 20, 4);
bool label = true;
void setup() {
Serial.begin(9600);   // open serial over USB
pinMode(A0, OUTPUT);
  pinMode(A1, INPUT);
  Serial.begin(9600);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
lcd.init();
lcd.backlight();
lcd.setCursor(1, 0);

}
void loop() {
  lcd.clear();
  label = false;
  // Apply power to the soil moisture sensor
  digitalWrite(A0, HIGH);
  delay(10); // Wait for 10 millisecond(s)
  moisture = analogRead(A1);
  // Turn off the sensor to reduce metal corrosion
  // over time
  digitalWrite(A0, LOW);
  
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  digitalWrite(10, LOW);
  digitalWrite(11, LOW);
  digitalWrite(12, LOW);
  if (moisture < 200) {
    digitalWrite(12, HIGH);
  } else {
    if (moisture < 400) {
      digitalWrite(11, HIGH);
    } else {
      if (moisture < 600) {
        digitalWrite(10, HIGH);
      } else {
        if (moisture < 800) {
          digitalWrite(9, HIGH);
        } else {
          digitalWrite(8, HIGH);
        }
      }
    }
  }

  moistPercent = (moisture/905)*100;
  lcd.print("Moisture: ");
  lcd.print(moistPercent);
  lcd.print("%");
  delay(500); // Wait for 100 millisecond(s)
  
  Serial.print("This moisture percentage of ");
  Serial.print(moistPercent, 2);
  Serial.print(" is: ");
  if(moistPercent <= 90) {
    Serial.print("Normal");
  }
  else if (moistPercent <= 110) {
    Serial.print("High");
  }
  Serial.print("\n");
}
//This is a function used to get the soil moisture content
