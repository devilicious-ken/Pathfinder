import { router } from "expo-router";
import { Text, Button, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home =() => {
    return(
        <SafeAreaView className="flex-1 items-center justify-center bg-gray-900"> 
            <Text className=" color-white p-[50px]">Your search for the next dream job is over 🚀</Text>
            <Button
                title="Start Browsing"
                color="#5424FD"
                accessibilityLabel="Learn more about this purple button"
            /><TouchableOpacity onPress={() => router.replace("/(tabs)")}>
                <Text> Hello</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Home;