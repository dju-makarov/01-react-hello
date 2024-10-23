import { useState } from 'react'

const Home = () => {
	const [count, setCount] = useState(0)

	const increment = () => setCount((prev) => prev + 1)
	const decrement = () => setCount((prev) => prev - 1)
	return (
		<>
			<h1>Здравствуйте!</h1>
			<h3 className="secondText">
				Это первый деплой для моего сайта. Он создан на nginx, чуть позже
				перейду на Docker и будет больше контента
			</h3>
			<h1>value = {count}</h1>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
		</>
	)
}

export default Home
