import { SearchBar } from '@rn-vui/themed';
// import { SafeAreaView } from 'react-native-safe-area-context';


const FoodSearchInputView = ({value, setValue}) => {
    return (
        // <SafeAreaView edges={['top']}/>
        <SearchBar
        platform="default"
        lightTheme
        round
        searchIcon={{ size: 24 }}
        loadingProps={{}}
        onChangeText={newVal => setValue(newVal)}
        placeholder="Find your food here🥐"
        value={value}
        />
        );
}

export default FoodSearchInputView;