import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';

const Screen02 = () => {
  const data = [
    {
      id: '1',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.000',
      discount: '39',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: '2',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.000',
      discount: '39',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: '3',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.000',
      discount: '39',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: '4',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.000',
      discount: '39',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: '5',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.000',
      discount: '39',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: '6',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.000',
      discount: '39',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: '7',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.000',
      discount: '39',
      image: require('../assets/snack-icon.png'),
    },

  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        width: '50%',
        padding: 10,
        gap: 5,
      }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image style={{
          width: 150,
          height: 150,
        }} source={item.image} />
      </View>
      <Text style={{ fontWeight: '500' }}>{item.title}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Entypo name="star" size={20} color="yellow" />
        <Entypo name="star" size={20} color="yellow" />
        <Entypo name="star" size={20} color="yellow" />
        <Entypo name="star" size={20} color="yellow" />
        <Entypo name="star" size={20} color="black" />
        <Text>(15)</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{ fontWeight: 'bold', marginRight: 20 }}>{item.price}</Text>
        <Text style={{ color: 'gray' }}>-{item.discount}%</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default Screen02;
