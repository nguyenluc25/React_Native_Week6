import { Text, View } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            padding: 10,
            gap: 20,
        }}>
            <Text style={{
                fontSize: 20,
                textAlign: 'center',
                padding: 20,
                borderWidth: 1,
                borderColor: 'black',
            }}
                onPress={() => navigation.navigate('screen01')}
            >Screen 01</Text>
            <Text style={{
                fontSize: 20,
                textAlign: 'center',
                padding: 20,
                borderWidth: 1,
                borderColor: 'black',
            }}
                onPress={() => navigation.navigate('screen02')}
            >Screen 02</Text>
        </View>
    )
};

export default Home;