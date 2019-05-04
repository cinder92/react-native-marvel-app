import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { measures } from '../settings'

const SmallMovie = ({onMoviePress, isLast, ...props}) => {
    return(
        <TouchableOpacity onPress={() => onMoviePress(props)}>
            <View style={{
                marginRight : isLast ? 0 : measures.widthPercentageToDP("5%"),
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Image 
                    source={props.image} 
                    style={styles.movie}
                    resizeMode={"cover"} />
                <View style={styles.dot} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    movie : {
        width : measures.widthPercentageToDP("25%"),
        height : measures.heightPercentageToDP("20%")
    },
    dot : {
        width : measures.widthPercentageToDP("2.5%"),
        height : measures.widthPercentageToDP("2.5%"),
        borderRadius : measures.widthPercentageToDP("2.5%") / 2,
        borderWidth : 1,
        borderColor:"white",
        backgroundColor : "white",
        marginVertical : measures.heightPercentageToDP("1.5%")
    }
})

export default SmallMovie