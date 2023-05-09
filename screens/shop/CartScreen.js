import React from "react";
import { StyleSheet } from "react-native";
import { View, FlatList, Text, Button } from "react-native";
import Colors from "../../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/shop/CartItem";
import { removeFromCart } from "../../redux/actions/cart";
import { addOrder } from "../../redux/actions/orders";

const CartScreen = () => {
  const cartTotalAmount = useSelector((state) => state?.cart?.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state?.cart?.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state?.cart?.items[key]?.productTitle,
        productPrice: state?.cart?.items[key]?.productPrice,
        quantity: state?.cart?.items[key]?.quantity,
        sum: state?.cart?.items[key]?.sum,
        productImage: state?.cart?.items[key]?.productImage,
      });
    }
    return transformedCartItems?.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const dispatch = useDispatch();

  return (
    <View style={s.screen}>
      <View style={s.summary}>
        <Text style={s.summaryText}>
          Total:
          <Text style={s.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          color={Colors.accent}
          disabled={cartItems?.length === 0}
          onPress={() => dispatch(addOrder(cartItems, cartTotalAmount))}
        />
      </View>
      <View>
        {cartItems?.length > 0 ? (
          <FlatList
            data={cartItems}
            renderItem={(cart) => (
              <CartItem
                cartItemData={cart?.item}
                onRemove={() => dispatch(removeFromCart(cart?.item?.productId))}
              />
            )}
            keyExtractor={(item) => item.productId}
          />
        ) : (
          <Text style={s.empty}>There is no item!</Text>
        )}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  screen: {
    margin: 20,
  },
  empty: {
    width: "100%",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "iran-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});
export default CartScreen;
