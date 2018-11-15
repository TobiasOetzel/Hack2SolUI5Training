# Getting started with SAP WebIDE

1. [Create an Account](https://www.sap.com/developer/topics/sap-webide.html)
![Webide Signup](WebIdeSignup.JPG)

2. Activate the account (confirm your email)

3. Launch the WebIDE

![Go to WebIDE](LaunchWebIDE.JPG)

### Initial import

1. (optional) If you want to save your progress in your own repository you can create a fork.
![Fork the codejam repo](Fork.JPG)

2. Press on "Clone from Git repository"
![Clone from Git repository](WebIDEGitClone.JPG)

3. Press the Clone or download button on your fork
![Clone or download](WebIDEGitUrl.JPG)

4. Copy the displayed Url and paste in in the dialog in the WebIDE
5. You can now [run your application](#running-the-application). Initially you are on step 35 - you can checkout step0 to start from scratch

**You are ready for the workshop now!**

### Checking out a step

1. Save all your changes by committing or stashing them. Later you can continue by checking out this branch again.
<div>
    <img src="Commit.JPG" alt="Commit"></src>
</div>

2. Switch to the history tab and double click on the checkbox of the entry you want to checkout.
Afterwards you are on a new branch and continue on this step.
<div>
    <img src="Checkout.JPG" alt="Checkout"></src>
</div>

## Odata - Importing the destinations

Destinations are used to connect to different systems on the SAP Cloud Platform
In our walkthrough we connect to the northwind service.

1. Go to the "Destinations" in the "Connectivity" section
![Connectivity - Destinations](Destinations.JPG)

2. Select [northwind](../northwind) or [es4](../ES4) and save them on your harddrive
3. Press the import button
4. Edit the ES4 destination and type your user and password to avoid authentication popups.

## Running the application

The Walkthrough contains 4 runnable files (.html files) (Initially only one).
To run it you can select the index.html file and select "Run as Web Application".

![Run as weball](RunAsWebapp.JPG)