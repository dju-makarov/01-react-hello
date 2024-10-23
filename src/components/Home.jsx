import { useState } from 'react'

const Home = () => {
	const [count, setCount] = useState(0)

	const increment = () => setCount((prev) => prev + 1)
	const decrement = () => setCount((prev) => prev - 1)
	return (
		<>
			<h1>Home</h1>
			<h2>value = {count}</h2>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
		</>
	)
}

export default Home
