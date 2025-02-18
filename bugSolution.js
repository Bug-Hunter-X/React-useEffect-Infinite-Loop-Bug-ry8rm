```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: The effect runs only once after the initial render
    console.log('Component mounted'); // Add a console message for better understanding
    // Add any other side effects like data fetching here.
    // For example, an API call with `fetch`
    // If you need to run this function multiple times based on a condition, then add the condition in the dependency array.
  }, []); // Empty dependency array means run only once after the initial render

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```