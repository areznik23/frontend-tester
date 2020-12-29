import { useEffect } from 'react'

const App = () => {

	useEffect(() => {
		fetch("https://testing-lynx-api.herokuapp.com/hello")
			.then(res => res.json())
			.then(console.log)
	}, [])
	
	return (
		<p>This is a react application</p>
	)
}

export default App
