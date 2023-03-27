# **Next.js** application that utilizes the free [Marvel API](https://developer.marvel.com/docs#!/public/getCreatorIndividual_get_13) to retrieve data

The application also incorporates [Chakra UI](https://chakra-ui.com/) for styling, [useSWR](https://swr.vercel.app/) for data fetching, and [Firebase](https://firebase.google.com/?gclid=CjwKCAjw_YShBhAiEiwAMomsENAifh0RfA71jXHdm61HPwV_zO57AwcyEDdakm1nuTupcY-c_e06XRoCBuMQAvD_BwE&gclsrc=aw.ds) for authentication and storing the rating values.

## **To run this application, follow these steps:**
1. Clone the repository by running
``` git clone https://github.com/kzdraveva/js-app-marvel.git```
2. Install dependencies using
``` npm install ```
3. Create a Firebase account and create a new project
4. Enable Authentication and Realtime Database in the Firebase project
5. Create a ```.env.local ``` file in the root directory and add the following variables:

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
   NEXT_PUBLIC_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID> 
   NEXT_PUBLIC_FIREBASE_MEASURMENT_ID = <YOUR_NEXT_PUBLIC_FIREBASE_MEASURMENT_ID>
   NEXT_PUBLIC_FIREBASE_DATABASE_URL = <YOUR_NEXT_PUBLIC_FIREBASE_DATABASE_URL> (if you set different location then the default one)
   ```
   
 ## **To start the development server, run:** ```npm run dev```
 
 ## Features
 
 ### Authentication 
 This app uses Firebase Authentication to handle user authentication. Users can sign up, log in, and log out. Protected routes can be created by wrapping     the pages with HOC Auth component and using the useAuth custom hook, which checks if the user is authenticated before allowing access to the route.
 
 ### Listing Comics, Series and Events
   The application displays lists of comics and series, with all of their items, titles and rating values. The pagination follows an Offset-based approach. The Events page features a slideshow that uses a custom useInterval hook.
   
 ### Rating Comics/Series:
   The app allows authenticated users to rate comics and series. Ratings are stored in Firestore and are associated with the user and the comic/series being rated. 

