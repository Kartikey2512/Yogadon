// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'Chatbot.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          //firebase.auth.GithubAuthProvider.PROVIDER_ID,
          
          //firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'Chatbot.html'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     {
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       requireDisplayName: false
//     }]
//   }
//     // {
//     //   provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     //   scopes: [
//     //     'https://www.googleapis.com/auth/contacts.readonly'
//     //   ],
//     //   customParameters: {
//     //     // Forces account selection even when one account
//     //     // is available.
//     //     prompt: 'select_account'
//     //   }
//     // }],
//     // tosUrl: 'Chatbot.html'
//   );