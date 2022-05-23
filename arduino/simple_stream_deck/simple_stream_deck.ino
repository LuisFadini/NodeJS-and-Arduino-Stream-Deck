#define BUTTON_1_PIN 3
#define BUTTON_1_LED_PIN 2

int button_1_state = 0;
int led_1_state = 0;
int old_led_1_state = 0;

void setup()
{
    pinMode(BUTTON_1_PIN, INPUT_PULLUP);
    pinMode(BUTTON_1_LED_PIN, OUTPUT);

    Serial.begin(9600);
}

void loop()
{
    if (digitalRead(BUTTON_1_PIN) == HIGH)
    {
        if (!button_1_state)
        {
            button_1_state = digitalRead(BUTTON_1_PIN);
            led_1_state = !led_1_state;
        }
    }
    else
    {
        button_1_state = digitalRead(BUTTON_1_PIN);
    }

    if (led_1_state != old_led_1_state)
    {
        old_led_1_state = led_1_state;
        Serial.println("Button 1: " + String(led_1_state) + ";");
    }

    digitalWrite(BUTTON_1_LED_PIN, led_1_state);
}