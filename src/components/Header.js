import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import logo from '../assets/marvel-logo-mini.png'
import { measures } from '../settings';

const MenuButton = () => {
    return(
        <TouchableOpacity>
            <View>
                <View style={styles.line} />
                <View style={styles.line2} />
                <View style={styles.line3} />
            </View>
        </TouchableOpacity>
    )
}

const Header = () => {
    return(
        <View style={styles.container}>
            <MenuButton />
            <Image source={logo} style={styles.logo} resizeMode={"contain"} />
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection:"row",
        alignItems : "center",
        justifyContent : "space-between",
        position:"absolute",
        height : measures.heightPercentageToDP("8%"),
        top : measures.heightPercentageToDP("3.5%"),
        left : 0,
        right : 0,
        zIndex:1,
        paddingHorizontal : measures.widthPercentageToDP("5%")
    },
    logo : {
        width : measures.widthPercentageToDP("40%")
    },
    line : {
        width : measures.widthPercentageToDP("7%"),
        height : 2,
        backgroundColor:"white",
        marginBottom : measures.heightPercentageToDP("0.5%")
    },
    line2:{
        width : measures.widthPercentageToDP("6%"),
        height : 2,
        backgroundColor:"white",
        marginBottom : measures.heightPercentageToDP("0.5%")
    },
    line3:{
        width : measures.widthPercentageToDP("5%"),
        height : 2,
        backgroundColor:"white"
    }
})

export default Header