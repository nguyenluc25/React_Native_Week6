import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  ScrollView,
} from 'react-native';

const Screen01 = () => {
  const data = [
    {
      id: 1,
      title: 'Ca nấu nẩu, nẩu mì mini...',
      shop: 'Devanc',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: 2,
      title: '1KG KHÔ GÀ BƠ TỎI ...',
      shop: 'LTD Food',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: 3,
      title: 'Xe cần cẩu đa năng',
      shop: 'Thế giới đồ chơi',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: 4,
      title: 'Đồ chơi dạng mô hình',
      shop: 'Thế giới đồ chơi',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: 5,
      title: 'Lãnh đạo giản đơn',
      shop: 'Minh Long Book',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: 6,
      title: 'Hiểu lòng con trẻ',
      shop: 'Minh Long Book',
      image: require('../assets/snack-icon.png'),
    },
  ];
  
  return (
    <>
    <Text
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.2)',
          padding: 10,
        }}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <ScrollView>
        {data.map((item) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                // flex: 1,
                alignItems: 'center',
                gap: 20,
                padding: 10,
              }} key={item.id}>
              <View
                style={{
                  flex: 1,
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  source={item.image}
                />
              </View>
              <View
                style={{
                  flex: 4,
                }}>
                <Text>{item.title}</Text>
                <Text style={{ color: 'gray', fontSize: 13 }}>
                  Shop <Text style={{ color: 'black' }}>{item.shop} </Text>
                </Text>
              </View>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: 'red',
                  color: 'white',
                  flex: 1,
                  textAlign: 'center',
                }}>
                Chat
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </>
  )
}

export default Screen01;