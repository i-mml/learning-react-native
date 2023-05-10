import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { PRODUCTS } from "../../data/dummy-data";
import { useSelector } from "react-redux";

const EditProductScreen = ({ navigation, route }) => {
  const params = route?.params;
  const productData = PRODUCTS?.find((item) => item?.id == params?.productId);

  const editedProduct = useSelector((state) =>
    state?.products?.userProducts?.find((item) => item?.id == params?.productId)
  );

  console.log(editedProduct?.title);

  const [title, setTitle] = useState(editedProduct ? editedProduct?.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct?.imageUrl : ""
  );
  const [price, setPrice] = useState(
    editedProduct ? editedProduct?.price?.toString() : ""
  );
  const [description, setDescription] = useState(
    editedProduct ? editedProduct?.description?.toString() : ""
  );

  useEffect(() => {
    navigation.setOptions({
      // headerRight: () => (
      //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      //     <Item
      //       title="Cart"
      //       iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
      //       onPress={() => navigation?.navigate("CartScreen")}
      //     />
      //   </HeaderButtons>
      // ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
            onPress={() => navigation?.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <ScrollView>
      <View style={s.form}>
        <View style={s.formControl}>
          <Text style={s.label}>Title</Text>
          <TextInput
            style={s.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={s.formControl}>
          <Text style={s.label}>Image URL</Text>
          <TextInput
            style={s.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={s.formControl}>
            <Text style={s.label}>Price</Text>
            <TextInput
              style={s.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}
        <View style={s.formControl}>
          <Text style={s.label}>Description</Text>
          <TextInput
            style={s.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontFamily: "iran-sans",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#888",
    borderBottomWidth: 1,
  },
});

export default EditProductScreen;
