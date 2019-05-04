import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import { SmallMovie } from '../components'
import { measures } from '../settings';

const MovieNavigation = ({onScroll,onReleaseScroll,movies,onMoviePress}) => {
    return(
        <View style={styles.bottomNavigation}>
            <View style={styles.container}>
                <Text style={styles.title}>Marvel Cinematic Universe</Text>
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                    onScrollEndDrag={onReleaseScroll}
                    onReleaseScroll={onReleaseScroll}
                    onScrollAnimationEnd={onReleaseScroll}
                    onMomentumScrollEnd={onReleaseScroll}
                    onTouchEnd={onReleaseScroll}
                    horizontal={true}
                    data={movies}
                    renderItem={({item,index}) => <SmallMovie onMoviePress={onMoviePress} isLast={index === (movies.length - 1)} {...item} />}
                    keyExtractor={(item,index) => `${index}`}
                />
            </View>

            <View style={styles.lineThroght} />
        </View>
    )
}

MovieNavigation.defualtProps = {
    movies : []
}

const styles = StyleSheet.create({
    bottomNavigation : {
        position : "absolute",
        bottom : measures.heightPercentageToDP("2%"),
        left : 0,
        right : 0,
        zIndex : 2
    },
    container : {
        paddingHorizontal : measures.widthPercentageToDP("5%")
    },
    title : {
        color : "white",
        fontSize : measures.widthPercentageToDP("4%"),
        fontWeight : "bold",
        paddingVertical : measures.heightPercentageToDP("2.5%")
    },
    lineThroght : {
        width : measures.widthPercentageToDP("100%"),
        height : measures.heightPercentageToDP("0.05%"),
        backgroundColor : "white",
        top : -measures.heightPercentageToDP("2.20%")
    }
})

export default MovieNavigation