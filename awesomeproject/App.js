import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios" //library to help make HTTP Requests 


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my riceapps app rebuilt! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const App = () => {
	//"Endpoint" URL where the data is located
	const URL = "https://swapi.dev/api/people/1/"

	// Set up the state to store the fetched data
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			console.log("Making GET Request");
			try {
				// GET Request
				const response = await axios.get(URL) //or use fetch here
						 .then((response) => {
						console.log(response)
				}).catch(() => {
				})
				// Update the state with the fetched data
				setData(response.data)	
			} catch (error) {
				// Handle any errors
        console.error('Failed to fetch data: ', error);
			}
		}

		fetchData()
	}, []);

}