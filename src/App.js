import { useEffect } from 'react'
const App = () => {

	useEffect(() => {
		fetch("https://testing-lynx-api.herokuapp.com/hello")
			.then(res => console.log(res)
	}, [])
	
	return (
		<p>This is a react application</p>
	)
}

export default App
