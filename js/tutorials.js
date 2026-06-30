// tutorials.js
// Add new tutorials by appending an object to this array.
// Required fields: id, icon, title, desc, difficulty ("easy" | "medium" | "tricky"), tip, steps[]
// Optional fields: warning

const TUTORIALS = [
  {
    id: "bluetooth-car",
    icon: "🚗",
    title: "Connect Phone to Car Bluetooth",
    desc: "Pair your phone with your car's audio system",
    difficulty: "medium",
    tip: "Both your phone AND your car need Bluetooth turned on — think of it like two people both needing to open their doors before shaking hands.",
    warning: "Watch out: Your car may show an old device with a very similar name (like 'John's iPhone'). That's a saved device from before. Scroll past it — the NEW entry appears at the very bottom of the list!",
    steps: [
      {
        title: "Start your car",
        body: "Start your car or turn the key to the 'accessory' position. Your car's display screen should light up."
      },
      {
        title: "Find Bluetooth on your car's screen",
        body: "Look for a Bluetooth or phone icon on your car's display. It might be under 'Settings', 'Phone', or 'Connectivity'. Every car is a little different — check the main menu on the screen."
      },
      {
        title: "Put your car in 'Pairing' mode",
        body: "Tap 'Add New Device', 'Pair Phone', or something similar. Your car is now waiting to find your phone. Some cars show a 4–6 digit PIN number on screen — keep an eye out for it."
      },
      {
        title: "Turn on Bluetooth on your iPhone",
        body: "On your iPhone, tap the Settings icon (the grey gear). Then tap 'Bluetooth' near the top of the list. Flip the switch to ON — it turns green when it's on."
      },
      {
        title: "Scroll to the BOTTOM of the Bluetooth list",
        body: "Under a section called 'Other Devices', new devices your phone has just discovered will appear. IMPORTANT: Scroll all the way down — new devices appear at the bottom, not the top. Old saved devices sit above them and may look similar."
      },
      {
        title: "Tap your car's name",
        body: "Tap the name of your car (it might say something like 'Toyota Audio', 'Honda Bluetooth', or your car brand name). Your iPhone may ask you to confirm a PIN — compare it to the number on your car's screen and tap 'Pair'."
      },
      {
        title: "Confirm the connection worked",
        body: "Your car's screen should say 'Connected' and your iPhone will show a Bluetooth symbol (looks like a stylized 'B') in the top bar. Try playing music — it should now come through your car speakers!"
      }
    ]
  },
  {
    id: "wifi-connect",
    icon: "📶",
    title: "Connect to Wi-Fi",
    desc: "Get your phone or tablet onto your home internet",
    difficulty: "easy",
    tip: "Wi-Fi is like a radio signal coming from your internet box (called a router). Your device needs to 'tune in' to it using a password — usually printed on a sticker on the bottom or back of your router.",
    warning: "Make sure you're entering the Wi-Fi password, not your email password or phone PIN. They are completely separate things!",
    steps: [
      {
        title: "Open Settings",
        body: "Find the Settings icon on your phone — it looks like a grey gear or cogwheel. Tap it once."
      },
      {
        title: "Tap 'Wi-Fi'",
        body: "Near the top of Settings, you'll see 'Wi-Fi'. Tap it. Make sure the switch at the top is turned ON — it should be green."
      },
      {
        title: "Wait a moment for networks to appear",
        body: "Your phone will automatically search for nearby Wi-Fi networks. After a few seconds, a list of network names will appear beneath 'Networks'."
      },
      {
        title: "Find your home network name",
        body: "Look for your home network in the list. It's often your internet provider's name plus some numbers, like 'ATT1234' or 'NETGEAR56'. If you're not sure, check the sticker on your router — it will say 'Network Name' or 'SSID'."
      },
      {
        title: "Tap your network name",
        body: "Tap it once. A small box will pop up asking for a password."
      },
      {
        title: "Enter your Wi-Fi password",
        body: "Type the password carefully. It IS case-sensitive — 'Hello' and 'hello' are treated as different passwords. The password is usually on the same sticker as the network name, labeled 'Password', 'Key', or 'WPA Key'."
      },
      {
        title: "Tap 'Join'",
        body: "Tap the blue 'Join' button. After a moment, a checkmark or Wi-Fi signal bars will appear next to the network name. You're connected to the internet!"
      }
    ]
  },
  {
    id: "text-size",
    icon: "🔤",
    title: "Make Text Bigger on Your Phone",
    desc: "Increase the font size so everything is easier to read",
    difficulty: "easy",
    tip: "Almost every setting on your phone lives inside the 'Settings' app — think of it as the control room. Whenever something looks or works differently than you'd like, Settings is always the first place to check.",
    steps: [
      {
        title: "Open Settings",
        body: "Tap the grey gear icon called 'Settings' on your home screen."
      },
      {
        title: "Scroll down and tap 'Accessibility'",
        body: "Scroll down the Settings list until you see 'Accessibility'. Tap it. This section is full of options specifically designed to make your phone easier to use."
      },
      {
        title: "Tap 'Display & Text Size'",
        body: "You'll see a new list of options. Tap 'Display & Text Size' near the top of the list."
      },
      {
        title: "Tap 'Larger Text'",
        body: "Tap 'Larger Text'. A screen with a slider will appear."
      },
      {
        title: "Turn on 'Larger Accessibility Sizes'",
        body: "At the top of this screen there's a switch called 'Larger Accessibility Sizes'. Flip it ON (it turns green) to unlock the biggest text size options."
      },
      {
        title: "Drag the slider to the right",
        body: "Slide the white circle to the right to increase text size. You'll see a live preview at the top of the screen showing how text will look as you drag. Stop when you find a comfortable size."
      },
      {
        title: "Done — it applies everywhere",
        body: "Tap the back arrow to exit. Your text is now bigger across the entire phone — in Messages, Mail, apps, and web pages."
      }
    ]
  },
  {
    id: "email-photo",
    icon: "✉️",
    title: "Send a Photo by Email",
    desc: "Attach a picture to an email and send it to someone",
    difficulty: "medium",
    tip: "Think of attaching a photo like sliding a picture into an envelope before sealing it. You write your letter first, then add the photo before you send.",
    warning: "Photos can be large files. If your email fails to send, try sending just one photo at a time instead of several at once.",
    steps: [
      {
        title: "Open the Mail app",
        body: "Tap the Mail app — it looks like a white envelope on a blue background. If you use Gmail, open that instead."
      },
      {
        title: "Start a new email",
        body: "Tap the pencil/compose icon — usually found in the bottom-right corner of the screen. A blank email form will open."
      },
      {
        title: "Enter the recipient's email address",
        body: "Tap the 'To:' field and type the person's full email address (for example, name@gmail.com). Double-check for typos — even one wrong letter means the email won't arrive."
      },
      {
        title: "Add a subject line",
        body: "Tap the 'Subject' field and type a short description of your email, like 'Photos from the garden' or 'Picture of the grandkids'."
      },
      {
        title: "Attach the photo",
        body: "Tap in the large empty area below the subject line. Then look for a small photo icon in the toolbar that appears above your keyboard, or tap and hold in the message area until a menu pops up and choose 'Insert Photo or Video'."
      },
      {
        title: "Choose your photo",
        body: "Your photo library will open. Scroll to find the photo you want to send, then tap it once. It will appear embedded in your email."
      },
      {
        title: "Send the email",
        body: "Tap the blue arrow (send) button in the top-right corner of the screen. Your email with the photo is on its way!"
      }
    ]
  },
  {
    id: "voicemail",
    icon: "📞",
    title: "Check Your Voicemail",
    desc: "Listen to messages people left when you missed a call",
    difficulty: "easy",
    tip: "Voicemail is like an answering machine built right into your phone. When you miss a call and someone leaves a message, it waits for you here until you're ready to listen.",
    steps: [
      {
        title: "Open the Phone app",
        body: "Tap the green Phone icon — it looks like a telephone handset. This is usually at the very bottom of your home screen."
      },
      {
        title: "Tap 'Voicemail'",
        body: "Along the bottom of the screen you'll see several tabs: Favorites, Recents, Contacts, Keypad, and Voicemail. Tap 'Voicemail' on the far right."
      },
      {
        title: "See your list of messages",
        body: "Any saved voicemails appear as a list. Each one shows the caller's name (or phone number if you don't have them saved) and the date and time they called."
      },
      {
        title: "Tap a message to open it",
        body: "Tap any voicemail in the list once to expand it. You'll see a play button (a triangle pointing right)."
      },
      {
        title: "Press Play to listen",
        body: "Tap the play button to hear the message. You can pause it and rewind by tapping the progress bar."
      },
      {
        title: "Use the speaker button if needed",
        body: "If the message is hard to hear, tap the 'Speaker' button so the sound comes out of the main speaker rather than the small earpiece at the top of the phone."
      },
      {
        title: "Delete messages when done",
        body: "Tap 'Delete' below any message to remove it. This keeps your voicemail box from filling up and preventing new messages."
      }
    ]
  },
  {
    id: "password-reset",
    icon: "🔑",
    title: "Reset a Forgotten Password",
    desc: "Get back into an account when you've forgotten your password",
    difficulty: "medium",
    tip: "Every website and app has a 'Forgot Password' option — this is completely normal to use. It sends a special link to your email so you can create a new password safely.",
    warning: "You'll need access to the email address you used when you first signed up for the account. If you're unsure which email that was, try your most commonly used one.",
    steps: [
      {
        title: "Go to the login page",
        body: "Open the app or website and navigate to the login screen — the page where it asks for your email and password."
      },
      {
        title: "Tap 'Forgot Password?'",
        body: "Look for a link or button that says 'Forgot Password?', 'Reset Password', or 'Can't sign in?'. It's almost always right below the password field. Tap it."
      },
      {
        title: "Enter your email address",
        body: "Type in the email address you used when you created the account. Then tap 'Send', 'Continue', or 'Submit'."
      },
      {
        title: "Check your email inbox",
        body: "Open your email app and look for a new message from the website. It may take a minute or two to arrive. If you don't see it, check your 'Junk', 'Spam', or 'Promotions' folder."
      },
      {
        title: "Tap the reset link in the email",
        body: "The email will contain a button or link that says 'Reset Password' or 'Click here to set a new password'. Tap it. It will open a secure page in your browser."
      },
      {
        title: "Create a new password",
        body: "Type a new password in the box provided. Try to use a mix of letters and numbers. Type it again in the 'Confirm Password' box to make sure both entries match exactly."
      },
      {
        title: "Sign in with your new password",
        body: "Go back to the app or website login screen and sign in using your email address and the brand new password you just created. You're back in!"
      }
    ]
  },
  {
    id: "hotspot",
    icon: "📡",
    title: "Use Your Phone as a Wi-Fi Hotspot",
    desc: "Share your phone's internet with a laptop or tablet",
    difficulty: "medium",
    tip: "Your phone connects to the internet through your phone carrier (like AT&T or Verizon). A hotspot lets you share that connection with other nearby devices — like a portable Wi-Fi router in your pocket.",
    warning: "Using a hotspot uses up your phone's mobile data plan. If you have a limited data plan, avoid streaming videos or large downloads while connected to a hotspot.",
    steps: [
      {
        title: "Open Settings",
        body: "Tap the grey gear (Settings) icon on your home screen."
      },
      {
        title: "Tap 'Personal Hotspot'",
        body: "Scroll down and tap 'Personal Hotspot'. On some iPhones it may be listed under 'Cellular' first."
      },
      {
        title: "Turn the hotspot on",
        body: "Flip the 'Allow Others to Join' switch to ON — it turns green. Your phone is now broadcasting a Wi-Fi signal."
      },
      {
        title: "Note your hotspot name and password",
        body: "On this same screen you'll see the hotspot's Wi-Fi name (usually your phone's name) and a password below it. Write these down or remember them — you'll need them on the other device."
      },
      {
        title: "On the other device, open Wi-Fi settings",
        body: "On the laptop or tablet you want to connect, go to its Wi-Fi settings. Look for your phone's hotspot name in the list of available networks."
      },
      {
        title: "Connect and enter the password",
        body: "Tap or click your phone's hotspot name, then enter the password shown on your phone's Personal Hotspot screen. The other device is now connected to the internet through your phone."
      }
    ]
  },
  {
    id: "app-store",
    icon: "📲",
    title: "Download a New App",
    desc: "Find and install an app from the App Store or Google Play",
    difficulty: "easy",
    tip: "The App Store (iPhone) and Google Play (Android) are safe, official stores where you can download apps. Think of them like a shopping mall — everything inside has been checked for safety.",
    steps: [
      {
        title: "Open the App Store or Google Play",
        body: "On iPhone, tap the blue 'App Store' icon. On Android, tap the colorful 'Google Play' icon. Both are usually on your home screen."
      },
      {
        title: "Tap the Search tab",
        body: "At the bottom of the screen, tap 'Search' (iPhone) or tap the search bar at the top (Android)."
      },
      {
        title: "Type the name of the app",
        body: "Type what you're looking for — for example, 'Facebook', 'Zoom', or 'weather app'. The keyboard will appear automatically."
      },
      {
        title: "Find the right app in the results",
        body: "A list of matching apps will appear. Look for the one with the right name, the correct icon, and a large number of reviews. Official apps are usually at the very top of the results."
      },
      {
        title: "Tap 'Get' or 'Install'",
        body: "Tap the blue 'Get' button (iPhone) or green 'Install' button (Android). You may be asked to confirm with your Face ID, fingerprint, or Apple ID password."
      },
      {
        title: "Wait for it to download",
        body: "A circle or progress bar will appear showing the download progress. This usually takes under a minute on a good Wi-Fi connection."
      },
      {
        title: "Open the app",
        body: "When the button changes to 'Open', tap it. The app is now installed and will also appear on your home screen for next time."
      }
    ]
  }
];
