import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";
import { FontAwesome } from '@expo/vector-icons';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const route = useRoute();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "DashBoard",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#8b0000",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
     headerRight: () => (

        <FontAwesome 
        name="list" size={24}
        color="white"
        style={{ marginRight: 12 }} />
      ),
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  console.log(route.params);

  const searchPlaces = (place) => {
    if(!route.params || !selectedDates){
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }

    if(route.params && selectedDates){
      navigation.navigate("Places",{
        rooms:rooms,
        adults:adults,
        children:children,
        selectedDates:selectedDates,
        place:place
      })
    }
  };
  const pressableData = [
    {
      title: '"Moto":',
      description: 'Finding the perfect gift for your loved one can be challenging,but this shows how much you truly care.',
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: '#ff8c00',
        backgroundColor: '#8b0000',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        marginTop:30,
      },
      logoStyle: styles.logo,
      
    },
    {
      title: '"Aim:"',
      description: 'Our Aim is to make every happy moment more special',
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: '#8b0000',
        backgroundColor: '#ff8c00',
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginTop:30,
      },
      logoStyle: styles.logo,
    },
    {
      title: '"Our logo:"',
      description: '',
      style: {
        // Add your style properties here
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: '#8b0000',
        backgroundColor: '#ff8c00',
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginTop:30,
      },
      logoStyle: styles.logo,
    },
    // Add more pressable data objects as needed
  ];

  return (
    <>
      <View>
        <Header />
<Text style={styles.questionnaire}> Questionnaire:</Text>
        <ScrollView>
          <View
            style={{
              margin: 50,
              borderColor: "#FFC72C",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            {/* Destination */}
            <Pressable
              onPress={() => navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
             <AntDesign name="user" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder={
                  route?.params ? route.params.input : "Select your gender"
                }
              />
            </Pressable>


            {/* Selected Dates */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Feather name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Select Your age"}
                mode={"range"}
              />
            </Pressable>

            {/* Rooms and Guests */}
            <Pressable
              onPress={() => setModalVisibile(!modalVisibile)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
              <TextInput
                placeholderTextColor="red"
                placeholder={` ${rooms} room • ${adults} adults • ${children} Children`}
              />
            </Pressable>

            {/* Recommend Button */}
            <Pressable
              onPress={() => searchPlaces(route?.params.input)}
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#8b0000",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Recommend
              </Text>
            </Pressable>
          </View>

          <Text
            style={{ color:"#8b0000" ,marginHorizontal: 20, fontSize: 17,textAlign: "center", fontWeight: "500" }}
          >
            "Choose Best for your love ones"
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pressableData.map((item, index) => (
             <Pressable key={index} style={item.style}>
             <Text style={styles.title}>{item.title}</Text>
             <Text style={styles.description}>{item.description}</Text>
             <Image source={require('../assets/logo.png')} style={item.logoStyle} />
      
    
          </Pressable>
            ))}

          </ScrollView>

          <Pressable
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
          </Pressable>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#8b0000",
                  backgroundColor: "#ff8c000",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
title:{
  color:'white'
},
description:
{
  color:'white'
}
,questionnaire:
{
  color:'#8b0000',
  fontSize:20,
  fontWeight:'bold',
  textAlign:'center',
   paddingTop: 20,
   paddingBottom:0
}

});
