
# HabitLoop

A React Native mobile app built with [Expo](https://expo.dev/), using:
- **NativeWind** (Tailwind CSS for React Native)
- **React Navigation** (Bottom Tabs + Stack)
- **Custom Folder Structure** for clean, scalable development

---

## 📁 Folder Structure

habitloop/  
├── App.js  
├── babel.config.js  
├── tailwind.config.js  
├── assets/  
│ └── images/, fonts/  
├── src/  
├── components/ # Reusable UI components  
├── screens/ # App screens (Home, Profile, etc.)  
├── navigation/ # Stack and Tab navigation configs  
├── context/ # Global state (e.g. Auth)  
├── hooks/ # Custom React hooks  
├── services/ # API calls  
├── utils/ # Helper functions  
├── constants/ # Static values  
└── styles/ # Global styling (theme, Tailwind utils)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/stanleyMuiruri/HabitLoop.git
cd HabitLoop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the Expo dev server

```bash
npx expo start
```

Scan the QR code using the Expo Go app on your mobile device.

---

## 🎨 Styling with NativeWind

NativeWind enables Tailwind classes like `bg-red-500`, `flex-1`, `text-center`, etc.  
To use Tailwind in your components:

```jsx
<View className="bg-white flex-1 items-center justify-center">
  <Text className="text-blue-600 text-xl">Hello World</Text>
</View>
```

---

## 🧭 Navigation Setup

- Bottom Tab Navigation: Home, Profile  
- Stack Navigation: Details screen  
- Configured inside `src/navigation/`

---

## 📦 Building the APK (Android Only)

### 1. Login to Expo

```bash
npx expo login
```

### 2. Build the APK

```bash
npx expo build:android -t apk
```

If you're using SDK 48+, use the new EAS build system:

```bash
npx expo install eas-cli
npx eas login
npx eas build -p android --profile preview
```

When asked, choose `apk` or `aab`. `apk` is easier for testing.

### 3. Download your APK

Once the build finishes, Expo will give you a URL:

✔ Build complete!  
🔗 Download: https://expo.dev/artifacts/your-apk-link

You can download and install the APK on a physical Android device for testing.

---

## 🔧 Troubleshooting

### Missing Utility Classes?

Make sure your `tailwind.config.js` includes:

```js
content: [
  "./App.js",
  "./src/**/*.{js,jsx}",
]
```

### Aliases not working?

Make sure you installed the Babel plugin:

```bash
npm install --save-dev babel-plugin-module-resolver
```

And configured `babel.config.js` like this:

```js
plugins: [
  'nativewind/babel',
  ['module-resolver', {
    alias: {
      '@components': './src/components',
      '@screens': './src/screens',
      '@utils': './src/utils',
    },
  }],
],
```

---

## 🙌 Credits

- React Native  
- Expo  
- NativeWind  
- React Navigation

---

## 📝 License

MIT License – feel free to use, modify, and share!