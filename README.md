# No Big Deal -app

An sexual health app created for Nordic Health Hackathon 2019, Helsinki

Discreetly deal with delicate issues like ordering STI treatments or contraception. 
Anonymously tell your past partners of possible infections. 
Find the help you need with a single click.


## Technologies used

```
React native
Twilio SMS API
Digi.me SDK
```

## Try it out

Here are instructions on how to try it out on your Android device.
Unfortunately Expo Client currently does not work properly on iOS devices,
limiting the choices for trying our app out!

### Prerequisites

```
Android device
Expo app for Android https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en
Expo account
```

### Test on Android

Use this url on your phone: http://exp.host/@lappalj4/hackathonapp

It should open the url in your Expo Client app, where you can play around with the app.

While we did create some alternative paths, we suggest you try the demoed use case flow **found below** for the best experience.

## Demoed use case

To reset the demo, scroll all the way down and press 'Reset demo'. Connect your digi.me account.
You can then for example press 'Status' and see that you are infection free.



### To start the demo flow:

```
Connect your digi.me account
```

```
Press 'New entry'
```

Our female user had sex with the following parameters:
```
No condom
No contraception
Vaginal sex
Phone number: *insert any*
```

Our user is presented with the option to order a morning after pill or a pregnancy test after having sex without contraception.
```
The buttons on this screen are not responsive:
Press 'Done' at the bottom of the screen
```

After this the app simulates the passing of time and has been analyzing your fitbit data for the past few days.

To initiate dialogue with the app:
```
Press 'Fitbit'
Press 'Not so great'
```

And in the demo case, our user has been experiencing symptoms related to chlamydia. To achieve this result:
```
In the 1st symptoms dialogue, select any number of symptoms (minimum 1).
*All four symptoms are characteristic to both chlamydia and gonorrhea.*

In the 2nd dialogue, choose one or both: 
'Abnormal bleeding' and 'Itching or burning in or around the vagina'

Press 'Book' under Go to the doctor
Press 'Close'
```

After this simulate visiting the Doctor:
```
Press 'Upcoming Doctor's appointment'
```

After this the app simulates the passing of time. To see the received test results and initiate dialogue with the app:
```
Press 'Status'
Press 'Download ePrescription' (Optional)
Press 'Inform partners'

Press 'Send' under Use a default message
or
Write your own message and press 'Send' under it (Button appears once the area has content)
```

After this, the app sends text messages to all of our user's saved partners that have a phone number added. 
^NOTE! We've disabled this feature because the Twilio trial account only allows sending messages to verified numbers

Done!

## Authors
Paula Laitinen
Juuso Lappalainen
Natasha Overell
Jesse Palo

