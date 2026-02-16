# Professional Calculator

A modern, feature-rich calculator mobile app built with HTML, CSS, JavaScript, and Capacitor. Designed for performance, security, and user experience.

## 🚀 Features

### Core Calculator Functions
- **Basic Operations**: Addition, subtraction, multiplication, division
- **Scientific Functions**: sin, cos, tan, square root, power, logarithms
- **Memory Functions**: Store, recall, clear, add, subtract from memory
- **Advanced Math**: Factorial, absolute value, constants (π, e)

### User Experience
- **Multiple Themes**: Dark, Light, and High Contrast modes
- **Responsive Design**: Optimized for all mobile screen sizes
- **Haptic Feedback**: Tactile response on button presses
- **Keyboard Support**: Full keyboard navigation support
- **History Display**: Shows previous calculations

### Security & Performance
- **Input Validation**: Comprehensive input sanitization and validation
- **Overflow Protection**: Prevents number overflow and errors
- **CSP Protection**: Content Security Policy for enhanced security
- **Offline Support**: Works without internet connection
- **PWA Support**: Installable as a native app

## 📱 Screenshots

![Calculator Interface](screenshots/calculator-dark.png)
*Dark theme with scientific functions*

![Calculator Interface](screenshots/calculator-light.png)
*Light theme with basic operations*

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd professional-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   # Open index.html in your browser
   # Or use a local server:
   npx serve -s .
   ```

### Building for Mobile with Capacitor

1. **Install Capacitor CLI:**
   ```bash
   npm install -g @capacitor/cli
   ```

2. **Add Android platform:**
   ```bash
   npx cap add android
   ```

3. **Sync project:**
   ```bash
   npx cap sync android
   ```

4. **Build Android APK:**
   ```bash
   npx cap run android
   ```

## 🏗️ Building with GitHub Actions

This project includes automated build workflows for Android APK generation.

### Automatic Builds

The GitHub Actions workflow will automatically:
- Build debug APKs on every push/PR
- Build release APKs when keystore secrets are provided
- Create Android App Bundles (AAB) for Google Play

### Setting up Release Builds

To enable release APK builds, you need to add the following secrets to your GitHub repository:

1. **ANDROID_KEYSTORE_BASE64**: Your keystore file encoded in base64
2. **ANDROID_KEY_ALIAS**: Your key alias
3. **ANDROID_KEYSTORE_PASSWORD**: Your keystore password
4. **ANDROID_KEY_PASSWORD**: Your key password

#### Creating a Keystore

```bash
# Generate a new keystore
keytool -genkeypair -v -keystore release.keystore -alias your-alias -keyalg RSA -keysize 2048 -validity 10000

# Convert to base64 for GitHub secrets
base64 release.keystore > keystore.base64
```

## 📦 Publishing to Uptodown

### Without Google Developer Account

Since you don't have a Google Developer account, Uptodown is an excellent alternative for distributing your Android app.

### Steps to Publish:

1. **Build your APK:**
   - Use the GitHub Actions workflow to generate the release APK
   - Download the `calculator-release.apk` artifact

2. **Create Uptodown Developer Account:**
   - Visit [Uptodown Developers](https://dev.en.aptoide.com/)
   - Register your developer account

3. **Prepare App Information:**
   - App name: "Professional Calculator"
   - Description: Use the app description from this README
   - Screenshots: Take screenshots of your app
   - Category: Tools/Utilities

4. **Upload APK:**
   - Go to your Uptodown developer dashboard
   - Click "Upload App"
   - Select your APK file
   - Fill in app details
   - Submit for review

5. **Promote Your App:**
   - Share your app link
   - Encourage users to leave reviews
   - Update regularly with new features

## 🔒 Security Features

### Input Validation
- All user inputs are sanitized and validated
- Prevents injection attacks and malformed input
- Number overflow protection

### Content Security Policy
- Strict CSP headers prevent XSS attacks
- Only allows trusted sources for resources
- Blocks inline scripts and unsafe eval

### Data Protection
- No external API calls or data collection
- All calculations performed locally
- Memory functions use secure storage

### Code Security
- No eval() or dangerous JavaScript functions
- Proper error handling and validation
- Secure coding practices throughout

## 🎨 Customization

### Themes
The calculator supports three themes that can be toggled:

1. **Dark Theme** (Default): Professional dark interface
2. **Light Theme**: Clean white interface
3. **High Contrast**: Accessibility-focused theme

### Customizing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --bg-color: #your-color;
    --card-bg: #your-color;
    --text-color: #your-color;
    /* ... more variables */
}
```

### Adding New Functions
Extend the calculator by adding new functions in `app.js`:

```javascript
case 'newFunction':
    result = yourCalculation(inputValue);
    expression = `newFunction(${inputValue})`;
    break;
```

## 🐛 Troubleshooting

### Common Issues

**APK won't install:**
- Ensure you're building for the correct architecture
- Check Android version compatibility
- Verify the APK is not corrupted

**App crashes on startup:**
- Check browser console for JavaScript errors
- Ensure all files are properly included
- Verify Capacitor configuration

**Build fails:**
- Check Node.js version compatibility
- Ensure Android SDK is properly installed
- Verify GitHub Actions secrets are correctly set

### Getting Help

1. Check the browser console for errors
2. Review the GitHub Actions logs
3. Ensure all dependencies are installed
4. Verify file paths and permissions

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Capacitor](https://capacitorjs.com/) for cross-platform mobile development
- Uses modern CSS Grid and Flexbox for responsive layouts
- Implements security best practices throughout

## 📞 Support

For support and questions:
- Create an issue in this repository
- Check the troubleshooting section above
- Review the GitHub Actions documentation for build issues

---

**Made with ❤️ for developers and users who appreciate quality calculator apps.**