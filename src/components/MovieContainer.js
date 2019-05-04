import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, UIManager, LayoutAnimation, Linking } from 'react-native'
import { ImageBackground } from 'react-native'
import { MovieNavigation, TriangleRight } from '../components'
import { measures } from '../settings';

const MovieContainer = ({movies,onScroll,onReleaseScroll,titlePosition}) => {

    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    

    const [currentMovie,setCurrentMovie] = useState(movies[0])

    const onPlayTrailer = () => {
        Linking.canOpenURL(currentMovie.trailer).then(supported => {
            if (supported) {
                Linking.openURL(currentMovie.trailer);
            } else {
                alert("Don't know how to open URI: " + currentMovie.trailer);
            }
        });
    }

    return(
        <ImageBackground 
            source={currentMovie.big}
            style={styles.backgroundImage}
            resizeMode={"cover"}
        >
            <View style={[styles.textWrap,titlePosition]}>
                <Text style={styles.bigTitle}>{currentMovie.title.toUpperCase()}</Text>
                <Text style={styles.duration}>{currentMovie.duration} min</Text>
                <View style={styles.separator} />
                <TouchableOpacity onPress={() => onPlayTrailer()}>
                    <View style={styles.circle}>
                        <TriangleRight />
                    </View>
                </TouchableOpacity>
            </View>
            <MovieNavigation 
                movies={movies}
                onScroll={onScroll}
                onReleaseScroll={onReleaseScroll}
                onMoviePress={(movie) => setCurrentMovie(movie)}
            />
        </ImageBackground>
    )
}

MovieContainer.defaultProps = {
    movies : []
}

const styles = StyleSheet.create({
    backgroundImage : {
        width : measures.widthPercentageToDP("100%"),
        height : measures.heightPercentageToDP("100%"),
        zIndex:2
    },
    textWrap : {
        position : "absolute",
        zIndex : 9,
        right : measures.widthPercentageToDP("1.5%"),
        top : measures.heightPercentageToDP("18%")
    },
    bigTitle : {
        color : "white",
        fontSize : measures.widthPercentageToDP("14%"),
        fontWeight : "bold",
        width : measures.widthPercentageToDP("50%"),
        fontFamily : "ColunaRounded-CondensedBold"
    },
    duration : {
        color : "white",
        fontSize : measures.widthPercentageToDP("4%")
    },
    separator : {
        width : measures.widthPercentageToDP("7%"),
        height : measures.heightPercentageToDP("0.5%"),
        borderRadius : 5,
        backgroundColor:"white",
        marginVertical : measures.heightPercentageToDP("2.5%")
    },
    circle : {
        width : measures.widthPercentageToDP("10%"),
        height : measures.widthPercentageToDP("10%"),
        borderRadius : measures.widthPercentageToDP("10%") / 2,
        borderColor : "white",
        borderWidth : 1,
        marginVertical : measures.heightPercentageToDP("1.5%")
    }
})

export default MovieContainer