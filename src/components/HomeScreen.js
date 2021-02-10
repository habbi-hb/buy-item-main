import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {images, colors} from './constant';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import LoginModal from './AuthModal';
import { useState } from 'react';
import { useEffect } from 'react';
  //const [hasError, setError]=useState({fasle});
  
const getapi = "https://thecodeditors.com/test/buy_it/api-get-allproductrole.php?role=bestseller";
const ggetapi="https://thecodeditors.com/test/buy_it/api-get-allproduct.php";



const Header = () => {


  let navigation = useNavigation();

  return (
    <View style={{height: '12%'}}>
      <View
        style={{
          width: '95%',
          height: 90,
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={30} />
        </TouchableOpacity>
        <Image source={images.logo} style={{height: 30, width: '30%'}} />
        <Text
          style={{
            position: 'absolute',
            right: '-1%',
            top: '20%',
            fontSize: 10,
            backgroundColor: colors.ORANGE.DEFAULT,
            borderRadius: 50,
            zIndex: 12,
            height: 18,
            width: 18,
            textAlign: 'center',
            paddingTop: 2,
            color: 'white',
          }}>
          23
        </Text>
        <TouchableOpacity
          style={{position: 'absolute', right: '3%'}}
          onPress={() => navigation.navigate('Cart')}>
          <AntDesign name="shoppingcart" size={25} />
          <Text>cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const imageSlider = [
  images.slider1,
  images.slider2,
  images.slider3,
  images.slider4,

];
const Slider = () => {
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        index={0}
        showPagination
        autoplayLoop
        disableGesture={true}
        autoplayLoopKeepAnimation={true}
        paginationActiveColor={colors.LIGHTGREY.DEFAULT}
        paginationDefaultColor={colors.TRANSPARENT}>
        {imageSlider.map((item, key) => (
          <View style={[styles.child]} key={key}>
            <Image source={item} style={{position: 'absolute', height: 190}} />
            <Text style={{fontSize: 18, color: 'black', marginLeft: '5%'}}>
              New Arrivals
            </Text>
            <Text style={styles.text}>This is my First Slider image</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('WishList')}
              style={{
                backgroundColor: colors.ORANGE.DEFAULT,
                width: '45%',
                marginLeft: '5%',
                padding: 10,
                marginTop: 10,
              }}>
              <Text style={{fontSize: 18, color: 'black'}}>
                Discover Now <AntDesign name="arrowright" size={20} />
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </SwiperFlatList>
    </View>
  );
};
const imageShopSlider = [
  images.ShopSlider,
  images.ShopSlider,
  images.ShopSlider,
  images.ShopSlider,
  images.ShopSlider,
  images.ShopSlider,
];
const ShopSlider = () => {
  
  let navigation = useNavigation();
  return (
    <View style={{height: 50}}>
  
        
       
     

      <SwiperFlatList
        // autoplay
        // autoplayDelay={3}
        index={0}
        showPagination
        autoplayLoop
        disableGesture={false}
        // autoplayLoopKeepAnimation={true}

        paginationActiveColor={colors.LIGHTGREY.DEFAULT}
        paginationDefaultColor={colors.TRANSPARENT}>
        {imageSlider.map((item, key) => (
          <View style={{flexDirection:'row', width: width}} >
         
         <View
         style={{
           
           justifyContent: 'center',
           marginRight: 10,
           flexDirection:'row'
         }}
         key={key}>
           <View>
        
         <Card.Cover
           source={images.ShopSlider}
           style={{height: 30, width: 40}}
         /></View>
         <View>
         <Text style={{color: colors.ORANGE.DEFAULT, fontSize: 14}}>
               HushPuppy
             </Text></View>
             
      
       </View>
       <View
         style={{
           
           justifyContent: 'center',
           marginRight: 10,
           flexDirection:'row'
         }}
         key={key+1}>
           <View>
        
         <Card.Cover
           source={images.ShopSlider}
           style={{height: 30, width: 40}}
         /></View>
         <View>
         <Text style={{color: colors.ORANGE.DEFAULT, fontSize: 14}}>
               HushPuppy
             </Text></View>
             
      
       </View>
       <View
         style={{
           
           justifyContent: 'center',
           marginRight: 10,
           flexDirection:'row'
         }}
         key={key+2}>
           <View>
        
         <Card.Cover
           source={images.ShopSlider}
           style={{height: 30, width: 40}}
         /></View>
         <View>
         <Text style={{color: colors.ORANGE.DEFAULT, fontSize: 14}}>
               HushPuppy
             </Text></View>
             
      
       </View>
       
      
      
       </View>
       
        ))}
      </SwiperFlatList>
    </View>
  )

}
const Slider1 = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //fetching our data

  useEffect(() => {
    fetch(getapi)
    .then((res) => res.json())
    .then((json) => setData(json.Data))
    .catch((error) => alert(error))
    .finally(setLoading(false));
  });
 
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
   
      <SwiperFlatList
        // autoplay
        // autoplayDelay={3}
        index={0}
        showPagination
        autoplayLoop
        disableGesture={false}
        // autoplayLoopKeepAnimation={true}

        paginationActiveColor={colors.LIGHTGREY.DEFAULT}
        paginationDefaultColor={colors.TRANSPARENT}>
        {data.map((item, key) => (
          <View
            style={{
              width: width * 0.48,
              justifyContent: 'center',
              height: 265,
              marginRight: 10,
            }}
            key={key}>
            <AntDesign
              name="hearto"
              style={{
                position: 'absolute',
                zIndex: 12,
                right: 10,
                top: 10,
                color: colors.LIGHTGREY.DEFAULT,
              }}
              size={30}
            />
            <Card.Cover
              source={{uri: 'https://thecodeditors.com/test/multi_vendor/admin/plugin/product_images/'+item.image_name+'',}}
              style={{height: height*0.45, width: '100%'}}
            />
            <View style={{padding:2}}>
              <Text
                style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
                {item.pro_des}
              </Text>
              <Text>{item.pro_name}</Text>
              <Text style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
                PKR {item.pro_price}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderColor: colors.ORANGE.DEFAULT,
                width: '100%',
                borderWidth: 1,
                marginTop: 5,
                marginBottom: 10,
                height: 25,
              }}
              onPress={() => navigation.navigate('CheckOrder')}>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.ORANGE.DEFAULT,
                  textAlign: 'center',
                }}>
                Add
              </Text>
            </TouchableOpacity>
            <AntDesign
              name="heart"
              style={{
                position: 'absolute',
                zIndex: 12,
                right: 10,
                top: 10,
                color: 'red',
              }}
              size={30}
            />
            <Card.Cover
              source={images.trendingProduct}
              style={{height: '51%'}}
            />
            <Card.Content>
              <Paragraph
                style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
                Heavy
              </Paragraph>
              <Paragraph>product number 8</Paragraph>
              <Paragraph style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
                PKR 500
              </Paragraph>
            </Card.Content>
            <TouchableOpacity
              style={{
                borderColor: colors.ORANGE.DEFAULT,
                width: '100%',
                borderWidth: 1,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.ORANGE.DEFAULT,
                  textAlign: 'center',
                }}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </SwiperFlatList>
    </View>
  );
};

const SliderTrending = () => {
  return (
    <View
      style={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        height: '30%',
      }}>
      <Card style={{width: '49%', marginRight: '2%'}}>
        <AntDesign
          name="hearto"
          style={{
            position: 'absolute',
            zIndex: 12,
            right: 10,
            top: 10,
            color: colors.LIGHTGREY.DEFAULT,
          }}
          size={30}
        />
        <Card.Cover source={images.trendingProduct} style={{height: '51%'}} />
        <Card.Content>
          <Paragraph style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
            Heavy
          </Paragraph>
          <Paragraph>product number 8</Paragraph>
          <Paragraph style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
            PKR 500
          </Paragraph>
        </Card.Content>
        <TouchableOpacity
          style={{
            borderColor: colors.ORANGE.DEFAULT,
            width: '100%',
            borderWidth: 1,
            marginTop: 5,
          }}
          onPress={() => navigation.navigate('CheckOrder')}>
          <Text
            style={{
              fontSize: 18,
              color: colors.ORANGE.DEFAULT,
              textAlign: 'center',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </Card>
      <Card style={{width: '49%'}}>
        <AntDesign
          name="heart"
          style={{
            position: 'absolute',
            zIndex: 12,
            right: 10,
            top: 10,
            color: 'red',
          }}
          size={30}
        />
        <Card.Cover source={images.trendingProduct} style={{height: '51%'}} />
        <Card.Content>
          <Paragraph style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
            Heavy
          </Paragraph>
          <Paragraph>product number 8</Paragraph>
          <Paragraph style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
            PKR 500
          </Paragraph>
        </Card.Content>
        <TouchableOpacity
          style={{
            borderColor: colors.ORANGE.DEFAULT,
            width: '100%',
            borderWidth: 1,
            marginTop: 5,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.ORANGE.DEFAULT,
              textAlign: 'center',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};
const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let navigation = useNavigation();
  useEffect(() => {
    fetch(ggetapi)
    .then((res) => res.json())
    .then((json) => setData(json.Data))
    .catch((error) => alert(error))
    .finally(setLoading(false));
  });

  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LoginModal />
      <View style={{height: '100%', backgroundColor: 'white'}}>
        <Header />
        <ScrollView style={{height: 300}}>
          <Slider />
          <Text style={{fontSize: 20, fontWeight: 'bold', padding: 10}}>
            Shops
          </Text>
          <ShopSlider />
          
          <Text style={{fontSize: 22, fontWeight: 'bold', padding: 10}}>
            Trending Today
          </Text>
          <Slider1 />

          <View
            style={{
              width: '96%',
              marginTop: '2%',
              // justifyContent: 'space-evenly',
              // alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', padding: 10}}>
              Electronic
            </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={({_, i}) => String(i)}
              renderItem={({item})=>{
                return (
                  <Card
                    style={{marginRight: '2%', width: '49%', height: 230, marginTop: 10}}>
                    <AntDesign
                      name="hearto"
                      style={{
                        position: 'absolute',
                        zIndex: 12,
                        right: 10,
                        top: 10,
                        color: colors.LIGHTGREY.DEFAULT,
                      }}
                      size={30}
                    />
                    <Card.Cover 
                      source={{uri: 'https://thecodeditors.com/test/multi_vendor/admin/plugin/product_images/'+item.image_name+'',}}

                    style={{height: '55%'}} />
                    <Card.Content>
                      <Paragraph style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
                        {item.pro_des}
                      </Paragraph>
                      <Paragraph>{item.pro_name}</Paragraph>
                      <Paragraph style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
                        PKR {item.pro_price}
                      </Paragraph>
                    </Card.Content>
                    <TouchableOpacity
                      style={{
                        borderColor: colors.ORANGE.DEFAULT,
                        width: '100%',
                        borderWidth: 1,
                        marginTop: 5,
                      }}
                      onPress={() => navigation.navigate('ProductDetail')}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: colors.ORANGE.DEFAULT,
                          textAlign: 'center',
                        }}>
                        Add
                      </Text>
                    </TouchableOpacity>
                  </Card>
                )
              }}
              numColumns={2}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {height: height * 0.305, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: 20, marginLeft: '5%', fontWeight: 'bold', color: 'white'},
});

export default App;
