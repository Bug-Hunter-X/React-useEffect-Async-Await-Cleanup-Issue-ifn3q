```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is still mounted
    async function fetchData() {
      const response = await fetch('/api/data');
      const data = await response.json();
      if (isMounted) {
        setCount(data.count);
      }
    }
    fetchData();

    return () => {
      isMounted = false; // Set the flag to false when the component unmounts
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```