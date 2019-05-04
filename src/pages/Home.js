import React, { useState } from 'react'
import { View, StatusBar, ScrollView} from 'react-native'
import { MovieContainer, Header } from '../components'
import { measures } from '../settings'

import captainAmerica from '../assets/captain-america-optimized.jpg'
import civilWar from '../assets/civil-war.jpg'
import firstAvenger from '../assets/first-avenger.jpg'
import winterSoldier from '../assets/winter-soldier.jpg'

import ironman from '../assets/iron-man-optimized.jpg'
import ironman1 from '../assets/iron-man-1.jpg'
import ironman2 from '../assets/iron-man-2.jpg'
import ironman3 from '../assets/iron-man-3.jpg'


import hulk from '../assets/hulk-optimized.jpg'
import hulkmovie from '../assets/hulk-movie.jpg'

import thor from '../assets/thor-optimized.jpg'
import thormovie from '../assets/thor.jpg'
import thorDarkWorld from '../assets/thor-dark-worl.jpg'
import thorRagnarok from '../assets/thor-ragnarok.jpg'

const movies = [{
    "id" : 1,
    "avenger" : "Captain America",
    "titles" : [{
        title : "Captain America : The First Avenger",
        big : captainAmerica,
        image : firstAvenger,
        trailer : "https://www.youtube.com/embed/JerVrbLldXw",
        duration : "124"
    },{
        title : "Captain America : Winter Soldier",
        big : captainAmerica,
        image : winterSoldier,
        trailer : "https://www.youtube.com/embed/tbayiPxkUMM",
        duration : "136"
    },{
        title : "Captain America : Civil War",
        big : captainAmerica,
        image : civilWar,
        trailer : "https://www.youtube.com/embed/dKrVegVI0Us",
        duration : "148"
    }]
},{
    id : 2,
    avenger : "Iron Man",
    titles : [{
        title : "Iron Man",
        big : ironman,
        image : ironman1,
        trailer : "https://www.youtube.com/embed/8hYlB38asDY",
        duration : "126"
    },{
        title : "Iron Man 2",
        big : ironman,
        image : ironman2,
        trailer : "https://www.youtube.com/embed/BoohRoVA9WQ",
        duration : "124"
    },{
        title : "Iron Man 3",
        big : ironman,
        image : ironman3,
        trailer : "https://www.youtube.com/embed/Ga817lEqAoI",
        duration : "131"
    }]
},{
    id : 3,
    avenger : "The Incredible Hulk",
    titlePosition : {
        top : measures.heightPercentageToDP("25%"),
        left : measures.widthPercentageToDP("5%")
    },
    titles : [{
        title : "The Incredible Hulk",
        big : hulk,
        image : hulkmovie,
        trailer : "https://www.youtube.com/embed/PYVccTVP4mg",
        duration : "138"
    }]
},{
    id : 4,
    avenger : "Thor",
    titlePosition : {
        top : measures.heightPercentageToDP("15%"),
        left : measures.widthPercentageToDP("5%")
    },
    titles : [{
        title : "Thor",
        big : thor,
        image : thormovie,
        trailer : "https://www.youtube.com/embed/JOddp-nlNvQ",
        duration : "115"
    },{
        title : "Thor : The Dark World",
        big : thor,
        image : thorDarkWorld,
        trailer : "https://www.youtube.com/embed/npvJ9FTgZbM",
        duration : "123"
    },{
        title : "Thor : Ragnarok",
        big : thor,
        image : thorRagnarok,
        trailer : "https://www.youtube.com/embed/ue80QwXMRHg",
        duration : "130"
    }]
}]

const Home = () => {
    const [canScroll, setCanScroll] = useState(true)

    return(
        <View style={{flex:1}}>
            <Header />
            <StatusBar barStyle={"light-content"} />
            <ScrollView 
                horizontal={true}
                pagingEnabled={true}
                bounces={false}
                scrollEnabled={canScroll}
            >
                {movies.map((movie) => (
                    <MovieContainer 
                        key={movie.id}
                        movies={movie.titles}
                        onScroll={() => setCanScroll(false)}
                        onReleaseScroll={() => setCanScroll(true)}
                        titlePosition={movie.titlePosition || {}}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Home