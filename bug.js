```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using async/await within useEffect without returning a cleanup function
    async function fetchData() {
      const response = await fetch('/api/data');
      const data = await response.json();
      setCount(data.count);
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```