import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
            <StatusBar style="dark" backgroundColor="#ffffff" />
            <View className="flex-1 items-center justify-center px-4">
                <Text className="text-2xl font-bold text-black mb-4">Home Screen</Text>

                <TouchableOpacity
                    className="bg-green-600 px-4 py-2 rounded"
                    onPress={() => navigation.navigate('Details')}
                >
                    <Text className="text-white text-center font-semibold">GO TO DETAILS</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
