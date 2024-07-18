import React, { useState } from 'react';
import FoodSearchInputView from '@/components/FoodSearchInputView';
import FoodSearchResultView from '@/components/FoodSearchResultView';
import {foodList} from '@/constants/Food';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SearchScreen() {
    const [sharedValue, setSharedValue] = useState("");
    return (
        <>
            <SafeAreaView edges={['top']}/>
            <FoodSearchInputView value={sharedValue} setValue={setSharedValue} />
            <FoodSearchResultView value={sharedValue} inputDataSet={foodList}/>
        </>
    );
}
