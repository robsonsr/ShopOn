
import React from 'react';
import {
    View
} from 'react-native';

import styles from './styles'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AvaliacaoStars = ({ quantStars }) => {

    const renderStars = () => {
        const yellowStars = [];
        const grayStars = []
        for (let i = 0; i < quantStars; i++) {
            yellowStars.push(
                <MaterialCommunityIcons
                    name="star"
                    size={13}
                    color={"#F2C94C"}
                />
            )
        }
        for (let i = 0; i < 5 - quantStars; i++) {
            grayStars.push(
                <MaterialCommunityIcons
                    name="star"
                    size={13}
                    color={"#EAEAEA"}
                />
            )
        }
        return [...yellowStars, ...grayStars];
    }
    return (
        <View
            style={{
                // width: "100%",
                flexDirection: "row"
            }}>
            {renderStars()}
        </View>
    )

}

export default AvaliacaoStars;