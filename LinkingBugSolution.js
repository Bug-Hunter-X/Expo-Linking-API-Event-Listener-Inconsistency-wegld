The solution involves using `Linking.getInitialURLAsync` to retrieve the initial URL when the app starts. This covers cases where the `Linking.addEventListener` might not fire.
```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = (url) => {
      // Handle the URL
      console.log('Deep link received:', url);
    };

    const subscribe = Linking.addEventListener('url', handleUrl);

    // Get the initial URL (if the app was opened from a deep link)
    (async () => {
      const url = await Linking.getInitialURLAsync();
      setInitialUrl(url);
      if (url) {
        handleUrl(url);
      }
    })();

    return () => subscribe.remove();
  }, []);

  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
}
```